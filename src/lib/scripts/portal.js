/**
 * vehicleiq-web/portal: app.js (auth guard, dashboard + table tabs, vehicle CRUD, search …)
 * and the inline "SMALL UI SCRIPT", each wrapped in an init function for onMount().
 * Logic and variable names are unchanged. Two mechanical edits: every call to the API now
 * goes through lib/api/api.js (the token lives in lib/api/session.js), and
 * document.addEventListener(...) became addDocumentListener(...), which does the same thing
 * but remembers the listener so the returned destroy function can remove it.
 *
 * NOTE (pre-existing, kept as is): the inline script's sidebar click handler contains an
 * accidental second copy of itself, so it registers an extra document listener on every click.
 */

import { createVehicle, deleteVehicle, getDashboard, getTable, getVehicles, updateVehicle } from '#lib/api/api.js';
import { clearSession, clearToken, getToken, getUsername } from '#lib/api/session.js';

const documentListeners = [];

function addDocumentListener(type, handler, options) {
  document.addEventListener(type, handler, options);
  documentListeners.push([type, handler, options]);
}

/** Remove every document-level listener registered by the portal scripts. */
export function destroyPortal() {
  for (const [type, handler, options] of documentListeners.splice(0)) {
    document.removeEventListener(type, handler, options);
  }
}

/** vehicleiq-web/portal/app.js */
export function initPortal() {
  "use strict";

  /* =========================================================
     AUTH
  ========================================================= */

  const username = getUsername();

  if (!getToken()) {
    window.location.href = "../login/";
    return;
  }


  /* =========================================================
     BASIC ELEMENTS
  ========================================================= */

  const userLabel =
    document.getElementById("userLabel");

  const logoutBtn =
    document.getElementById("logoutBtn");

  const status =
    document.getElementById("status");

  const stats =
    document.getElementById("stats");

  const tabs =
    document.getElementById("tabs");

  const tableWrap =
    document.getElementById("tableWrap");

  const tableHead =
    document.getElementById("tableHead");

  const tableBody =
    document.getElementById("tableBody");

  const tableMeta =
    document.getElementById("tableMeta");

  const vehicleModal =
    document.getElementById("vehicleModal");

  const vehicleForm =
    document.getElementById("vehicleForm");

  const addVehicleBtn =
    document.getElementById("addVehicleBtn");

  const cancelVehicleBtn =
    document.getElementById("cancelVehicleBtn");

  const saveVehicleBtn =
    document.getElementById("saveVehicleBtn");

  const vehicleSearch =
    document.getElementById("vehicleSearch");

  const vehicleActions =
    document.getElementById("vehicleActions");

  const workspaceGrid =
    document.querySelector(".workspace-grid");

  const selectorCard =
    document.querySelector(".selector-card");


  /* =========================================================
     USER
  ========================================================= */

  if (userLabel) {
    userLabel.textContent = username;
  }


  /* =========================================================
     HTML ESCAPE
  ========================================================= */

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  /* =========================================================
     HEADER MENU (mobile hamburger)
  ========================================================= */

  const portalNav = document.getElementById("portal-nav");
  const navToggle = portalNav && portalNav.parentElement.querySelector('button[aria-label="Open navigation"]');

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      const open = portalNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }


  /* =========================================================
     LOGOUT
  ========================================================= */

  if (logoutBtn) {
    logoutBtn.addEventListener(
      "click",
      function () {

        clearSession();

        window.location.href = "../login/";
      }
    );
  }


  /* =========================================================
     DATABASE TAB CONFIGURATION
  ========================================================= */

  const tabConfig = {

    vehicles: {

      columns: [
        ["id", "ID"],
        ["vehicle_name", "Vehicle"],
        ["brand", "Brand"],
        ["model", "Model"],
        ["year", "Year"],
        ["vin", "VIN"]
      ]
    },


    ecu: {

      columns: [
        ["id", "ID"],
        ["name", "Name"],
        ["manufacturer", "Manufacturer"],
        ["can_tx_id", "TX"],
        ["can_rx_id", "RX"],
        ["protocol", "Protocol"],
        ["security_library", "Security lib"]
      ]
    },


    did: {

      columns: [
        ["did", "DID"],
        ["name", "Name"],
        ["ecu_name", "ECU"],
        ["length", "Len"],
        ["unit", "Unit"],
        ["description", "Description"]
      ]
    },


    dtc: {

      columns: [
        ["dtc", "DTC"],
        ["description", "Description"],
        ["severity", "Severity"],
        ["status", "Status"],
        ["ecu_name", "ECU"]
      ]
    },


    routine: {

      columns: [
        ["routine_id", "Routine ID"],
        ["name", "Name"],
        ["ecu_name", "ECU"],
        ["security_level", "Security"],
        ["session", "Session"],
        ["description", "Description"]
      ]
    },


    uds: {

      columns: [
        ["service_id", "SID"],
        ["service_name", "Name"],
        ["sub_function", "Sub"],
        ["ecu_name", "ECU"],
        ["description", "Description"]
      ]
    },


    live: {

      columns: [
        ["id", "ID"],
        ["level", "Level"],
        ["message", "Message"],
        ["created_at", "Time"]
      ]
    },


    reports: {

      columns: [
        ["id", "ID"],
        ["title", "Title"],
        ["report_type", "Type"],
        ["ecu_name", "ECU"],
        ["generated_at", "Generated"],
        ["summary", "Summary"]
      ]
    }

  };


  /* =========================================================
     DASHBOARD STAT LABELS
  ========================================================= */

  const labels = {

    ecu_count: "ECUs",

    did_count: "DIDs",

    dtc_count: "DTCs",

    routine_count: "Routines",

    flash_count: "Flash",

    freeze_frame_count: "Freeze frames",

    uds_service_count: "UDS services",

    session_count: "Sessions",

    report_count: "Reports"

  };


  /* =========================================================
     VIEW MANAGEMENT
  ========================================================= */

  function showDashboardView() {

    if (selectorCard) {
      selectorCard.style.display = "flex";
    }

    if (workspaceGrid) {

      workspaceGrid.style.setProperty(
        "display",
        "grid",
        "important"
      );

      workspaceGrid.classList.remove(
        "tab-hidden"
      );
    }

    if (tableWrap) {

      tableWrap.hidden = true;

      tableWrap.style.setProperty(
        "display",
        "none",
        "important"
      );
    }

    if (vehicleActions) {

      vehicleActions.style.setProperty(
        "display",
        "none",
        "important"
      );
    }
  }


  function showTableView(key) {

    if (selectorCard) {
      selectorCard.style.display = "flex";
    }

    if (workspaceGrid) {

      workspaceGrid.style.setProperty(
        "display",
        "none",
        "important"
      );

      workspaceGrid.classList.add(
        "tab-hidden"
      );
    }

    if (tableWrap) {

      tableWrap.hidden = false;

      tableWrap.style.setProperty(
        "display",
        "block",
        "important"
      );

      tableWrap.style.setProperty(
        "visibility",
        "visible",
        "important"
      );

      tableWrap.style.setProperty(
        "opacity",
        "1",
        "important"
      );
    }

    if (vehicleActions) {

      vehicleActions.style.setProperty(
        "display",
        key === "vehicles"
          ? "flex"
          : "none",
        "important"
      );
    }
  }


  /* =========================================================
     VEHICLE SEARCH
  ========================================================= */

  function applyVehicleSearch() {

    if (!vehicleSearch || !tableBody) {
      return;
    }

    const text =
      vehicleSearch.value
        .toLowerCase()
        .trim();

    const rows =
      tableBody.querySelectorAll("tr");

    rows.forEach(function (row) {

      const rowText =
        row.textContent
          .toLowerCase();

      row.style.display =
        !text ||
        rowText.includes(text)
          ? ""
          : "none";

    });
  }


  if (vehicleSearch) {

    vehicleSearch.addEventListener(
      "input",
      applyVehicleSearch
    );

  }


  /* =========================================================
     RENDER DATABASE TABLE
  ========================================================= */

  function renderTable(key, rows) {

    if (!tableHead || !tableBody) {
      return;
    }

    const cfg =
      tabConfig[key];

    if (!cfg) {
      return;
    }


    /* -------------------------------------------------------
       HEADER
    ------------------------------------------------------- */

    let headerHtml = "<tr>";

    cfg.columns.forEach(
      function (column) {

        headerHtml +=
          "<th>" +
          escapeHtml(column[1]) +
          "</th>";

      }
    );


    /* Actions only for Vehicles */

    if (key === "vehicles") {

      headerHtml +=
        "<th>Actions</th>";

    }

    headerHtml += "</tr>";

    tableHead.innerHTML =
      headerHtml;


    /* -------------------------------------------------------
       NO DATA
    ------------------------------------------------------- */

    if (
      !Array.isArray(rows) ||
      rows.length === 0
    ) {

      const colspan =
        cfg.columns.length +
        (key === "vehicles" ? 1 : 0);

      tableBody.innerHTML =
        "<tr>" +
          "<td colspan=\"" +
          colspan +
          "\">" +
          "No data found." +
          "</td>" +
        "</tr>";

      if (tableMeta) {

        tableMeta.textContent =
          "0 row(s)";

      }

      showTableView(key);

      return;
    }


    /* -------------------------------------------------------
       TABLE ROWS
    ------------------------------------------------------- */

    tableBody.innerHTML =
      rows
        .slice(0, 200)
        .map(function (row) {

          let html =
            "<tr>";


          cfg.columns.forEach(
            function (column) {

              html +=
                "<td>" +
                escapeHtml(
                  row[column[0]]
                ) +
                "</td>";

            }
          );


          /* -------------------------------------------------
             VEHICLE ACTION BUTTONS
          ------------------------------------------------- */

          if (key === "vehicles") {

            html +=
              "<td class=\"vehicle-actions-cell\">" +

                "<button " +
                  "type=\"button\" " +
                  "class=\"edit-vehicle-btn\" " +
                  "data-id=\"" +
                  escapeHtml(row.id) +
                  "\">" +
                  "Edit" +
                "</button>" +

                "<button " +
                  "type=\"button\" " +
                  "class=\"delete-vehicle-btn\" " +
                  "data-id=\"" +
                  escapeHtml(row.id) +
                  "\">" +
                  "Delete" +
                "</button>" +

              "</td>";

          }


          html +=
            "</tr>";

          return html;

        })
        .join("");


    /* -------------------------------------------------------
       TABLE META
    ------------------------------------------------------- */

    if (tableMeta) {

      tableMeta.textContent =
        rows.length > 200
          ? "Showing first 200 of " +
            rows.length +
            " rows"
          : rows.length +
            " row(s)";

    }


    /* -------------------------------------------------------
       SHOW TABLE
    ------------------------------------------------------- */

    showTableView(key);


    /* -------------------------------------------------------
       VEHICLE SEARCH
    ------------------------------------------------------- */

    if (key === "vehicles") {
      applyVehicleSearch();
    }

  }


  /* =========================================================
     LOAD DATABASE TAB
  ========================================================= */

  async function loadTab(key) {

    const cfg =
      tabConfig[key];

    if (!cfg) {

      console.warn(
        "No configuration for:",
        key
      );

      return;

    }


    if (status) {

      status.textContent =
        "Loading " +
        key +
        "…";

    }


    try {

      const data =
        await getTable(key);


      const rows =
        Array.isArray(data)
          ? data
          : [];


      renderTable(
        key,
        rows
      );


      if (status) {

        status.textContent =
          key.charAt(0).toUpperCase() +
          key.slice(1) +
          " loaded.";

      }


      console.log(
        key +
        " data:",
        rows
      );


    } catch (error) {

      console.error(
        "Load " +
        key +
        " error:",
        error
      );


      if (status) {

        status.textContent =
          error.message ||
          "Failed to load " +
          key;

      }


      if (
        /unauthor/i.test(
          String(error.message)
        )
      ) {

        clearToken();

        setTimeout(
          function () {

            window.location.href =
              "../login/";

          },
          800
        );

      }

    }

  }


  /* =========================================================
     SIDEBAR NAVIGATION
  ========================================================= */

  addDocumentListener(
    "click",
    function (event) {

      const button =
        event.target.closest(
          ".sidebar-item"
        );


      if (!button) {
        return;
      }


      /* -----------------------------------------
         API TABS
      ----------------------------------------- */

      const key =
        button.dataset.tab;


      if (key) {

        event.preventDefault();


        document
          .querySelectorAll(
            ".sidebar-item"
          )
          .forEach(
            function (item) {

              item.classList.remove(
                "is-active"
              );

            }
          );


        button.classList.add(
          "is-active"
        );


        loadTab(key);

        return;

      }


      /* -----------------------------------------
         OTHER SECTIONS
         CAN Monitor
         Diagnostics
         Settings
      ----------------------------------------- */

      const section =
        button.dataset.section;


      if (section) {

        event.preventDefault();


        document
          .querySelectorAll(
            ".sidebar-item"
          )
          .forEach(
            function (item) {

              item.classList.remove(
                "is-active"
              );

            }
          );


        button.classList.add(
          "is-active"
        );


        if (vehicleActions) {

          vehicleActions.style.setProperty(
            "display",
            "none",
            "important"
          );

        }


        if (tableWrap) {

          tableWrap.hidden = true;

          tableWrap.style.setProperty(
            "display",
            "none",
            "important"
          );

        }


        if (workspaceGrid) {

          workspaceGrid.classList.add(
            "tab-hidden"
          );

        }


        if (status) {

          if (
            section === "can-monitor"
          ) {

            status.textContent =
              "CAN Monitor selected.";

          }

          else if (
            section === "diagnostics"
          ) {

            status.textContent =
              "Diagnostics selected.";

          }

          else if (
            section === "settings"
          ) {

            status.textContent =
              "Settings selected.";

          }

        }

      }

    }
  );


  /* =========================================================
     OLD HIDDEN TABS
     Compatibility only
  ========================================================= */

  if (tabs) {

    tabs.addEventListener(
      "click",
      function (event) {

        const button =
          event.target.closest(
            ".tab"
          );


        if (!button) {
          return;
        }


        const key =
          button.dataset.tab;


        if (!key) {
          return;
        }


        tabs
          .querySelectorAll(
            ".tab"
          )
          .forEach(
            function (item) {

              item.classList.remove(
                "is-active"
              );

            }
          );


        button.classList.add(
          "is-active"
        );


        loadTab(key);

      }
    );

  }


  /* =========================================================
     DASHBOARD LOAD
  ========================================================= */

  async function loadDashboard() {

    try {

      if (status) {

        status.textContent =
          "Loading dashboard…";

      }


      const data =
        await getDashboard();


      /* -----------------------------------------
         DASHBOARD STATS
      ----------------------------------------- */

      if (stats) {

        const statItems = [];


        Object.keys(labels)
          .forEach(
            function (key) {

              if (
                data[key] !== undefined &&
                data[key] !== null
              ) {

                statItems.push(

                  "<div class=\"stat-card\">" +

                    "<span class=\"stat-label\">" +

                      escapeHtml(
                        labels[key]
                      ) +

                    "</span>" +

                    "<strong class=\"stat-value\">" +

                      escapeHtml(
                        data[key]
                      ) +

                    "</strong>" +

                  "</div>"

                );

              }

            }
          );


        if (
          statItems.length > 0
        ) {

          stats.innerHTML =
            statItems.join("");

        }

      }


      /* -----------------------------------------
         SHOW DASHBOARD
      ----------------------------------------- */

      showDashboardView();


      if (status) {

        status.textContent =
          "Dashboard loaded.";

      }


      console.log(
        "Dashboard data:",
        data
      );


      /* -----------------------------------------
         DEFAULT = VEHICLES
      ----------------------------------------- */

      const vehiclesButton =
        document.querySelector(
          '.sidebar-item[data-tab="vehicles"]'
        );


      if (vehiclesButton) {

        document
          .querySelectorAll(
            ".sidebar-item"
          )
          .forEach(
            function (item) {

              item.classList.remove(
                "is-active"
              );

            }
          );


        vehiclesButton.classList.add(
          "is-active"
        );

      }


      loadTab("vehicles");


    } catch (error) {

      console.error(
        "Dashboard error:",
        error
      );


      if (status) {

        status.textContent =
          error.message ||
          "Could not load dashboard";

      }


      if (
        /unauthor/i.test(
          String(error.message)
        )
      ) {

        clearToken();


        setTimeout(
          function () {

            window.location.href =
              "../login/";

          },
          800
        );

      }

    }

  }


  /* =========================================================
     VEHICLE EDIT STATE
  ========================================================= */

  let editingVehicleId = null;


  /* =========================================================
     OPEN ADD VEHICLE MODAL
  ========================================================= */

  if (
    addVehicleBtn &&
    vehicleForm &&
    vehicleModal
  ) {

    addVehicleBtn.addEventListener(
      "click",
      function () {

        editingVehicleId =
          null;


        vehicleForm.reset();


        vehicleModal.hidden =
          false;


        if (saveVehicleBtn) {

          saveVehicleBtn.textContent =
            "Save Vehicle";

        }


        const title =
          vehicleModal.querySelector(
            "h2"
          );


        if (title) {

          title.textContent =
            "Add Vehicle";

        }

      }
    );

  }


  /* =========================================================
     CANCEL VEHICLE MODAL
  ========================================================= */

  if (
    cancelVehicleBtn &&
    vehicleForm &&
    vehicleModal
  ) {

    cancelVehicleBtn.addEventListener(
      "click",
      function () {

        editingVehicleId =
          null;


        vehicleForm.reset();


        vehicleModal.hidden =
          true;


        if (saveVehicleBtn) {

          saveVehicleBtn.textContent =
            "Save Vehicle";

        }


        const title =
          vehicleModal.querySelector(
            "h2"
          );


        if (title) {

          title.textContent =
            "Add Vehicle";

        }

      }
    );

  }


  /* =========================================================
     VEHICLE EDIT / DELETE
  ========================================================= */

  if (tableBody) {

    tableBody.addEventListener(
      "click",
      async function (event) {


        /* ===================================================
           DELETE
        =================================================== */

        const deleteBtn =
          event.target.closest(
            ".delete-vehicle-btn"
          );


        if (deleteBtn) {

          const vehicleId =
            deleteBtn.dataset.id;


          if (!vehicleId) {

            alert(
              "Vehicle ID not found."
            );

            return;

          }


          const confirmed =
            window.confirm(
              "Are you sure you want to delete this vehicle?"
            );


          if (!confirmed) {
            return;
          }


          try {

            deleteBtn.disabled =
              true;


            deleteBtn.textContent =
              "Deleting…";


            await deleteVehicle(
              vehicleId
            );


            alert(
              "Vehicle deleted successfully."
            );


            await loadTab(
              "vehicles"
            );


          } catch (error) {

            console.error(
              "Delete error:",
              error
            );


            alert(
              error.message ||
              "Failed to delete vehicle."
            );


            deleteBtn.disabled =
              false;


            deleteBtn.textContent =
              "Delete";

          }


          return;

        }


        /* ===================================================
           EDIT
        =================================================== */

        const editBtn =
          event.target.closest(
            ".edit-vehicle-btn"
          );


        if (!editBtn) {
          return;
        }


        const vehicleId =
          editBtn.dataset.id;


        if (!vehicleId) {

          alert(
            "Vehicle ID not found."
          );

          return;

        }


        editingVehicleId =
          vehicleId;


        try {

          if (status) {

            status.textContent =
              "Loading vehicle…";

          }


          const vehicles =
            await getVehicles();


          const vehicle =
            vehicles.find(
              function (item) {

                return (
                  String(item.id) ===
                  String(vehicleId)
                );

              }
            );


          if (!vehicle) {

            throw new Error(
              "Vehicle not found."
            );

          }


          /* -----------------------------------------
             FORM INPUTS
          ----------------------------------------- */

          const nameInput =
            document.getElementById(
              "vehicleName"
            );

          const brandInput =
            document.getElementById(
              "vehicleBrand"
            );

          const modelInput =
            document.getElementById(
              "vehicleModel"
            );

          const yearInput =
            document.getElementById(
              "vehicleYear"
            );

          const vinInput =
            document.getElementById(
              "vehicleVin"
            );


          if (nameInput) {

            nameInput.value =
              vehicle.vehicle_name ||
              "";

          }


          if (brandInput) {

            brandInput.value =
              vehicle.brand ||
              "";

          }


          if (modelInput) {

            modelInput.value =
              vehicle.model ||
              "";

          }


          if (yearInput) {

            yearInput.value =
              vehicle.year ||
              "";

          }


          if (vinInput) {

            vinInput.value =
              vehicle.vin ||
              "";

          }


          /* -----------------------------------------
             MODAL TITLE
          ----------------------------------------- */

          const title =
            vehicleModal
              ? vehicleModal.querySelector(
                  "h2"
                )
              : null;


          if (title) {

            title.textContent =
              "Edit Vehicle";

          }


          if (saveVehicleBtn) {

            saveVehicleBtn.textContent =
              "Update Vehicle";

          }


          if (vehicleModal) {

            vehicleModal.hidden =
              false;

          }


          if (status) {

            status.textContent =
              "Editing vehicle.";

          }


        } catch (error) {

          console.error(
            "Edit vehicle error:",
            error
          );


          editingVehicleId =
            null;


          alert(
            error.message ||
            "Failed to load vehicle."
          );

        }

      }
    );

  }


  /* =========================================================
     SAVE / UPDATE VEHICLE
  ========================================================= */

  if (vehicleForm) {

    vehicleForm.addEventListener(
      "submit",
      async function (event) {

        event.preventDefault();


        const vehicle = {

          vehicle_name:
            (
              document.getElementById(
                "vehicleName"
              )?.value ||
              ""
            ).trim(),


          brand:
            (
              document.getElementById(
                "vehicleBrand"
              )?.value ||
              ""
            ).trim(),


          model:
            (
              document.getElementById(
                "vehicleModel"
              )?.value ||
              ""
            ).trim(),


          year:
            document.getElementById(
              "vehicleYear"
            )?.value ||
            null,


          vin:
            (
              document.getElementById(
                "vehicleVin"
              )?.value ||
              ""
            ).trim()

        };


        /* -----------------------------------------
           VALIDATION
        ----------------------------------------- */

        if (!vehicle.vehicle_name) {

          alert(
            "Vehicle Name is required."
          );

          return;

        }


        /* -----------------------------------------
           ADD OR UPDATE
        ----------------------------------------- */

        const isEditing =
          editingVehicleId !== null;


        if (saveVehicleBtn) {

          saveVehicleBtn.disabled =
            true;


          saveVehicleBtn.textContent =
            isEditing
              ? "Updating…"
              : "Saving…";

        }


        try {

          if (isEditing) {

            await updateVehicle(
              editingVehicleId,
              vehicle
            );

          } else {

            await createVehicle(
              vehicle
            );

          }


          /* -----------------------------------------
             SUCCESS
          ----------------------------------------- */

          alert(
            isEditing
              ? "Vehicle updated successfully."
              : "Vehicle added successfully."
          );


          editingVehicleId =
            null;


          vehicleForm.reset();


          if (vehicleModal) {

            vehicleModal.hidden =
              true;

          }


          if (saveVehicleBtn) {

            saveVehicleBtn.textContent =
              "Save Vehicle";

          }


          await loadTab(
            "vehicles"
          );


        } catch (error) {

          console.error(
            "Save vehicle error:",
            error
          );


          alert(
            error.message ||
            "Failed to save vehicle."
          );


        } finally {

          if (saveVehicleBtn) {

            saveVehicleBtn.disabled =
              false;


            saveVehicleBtn.textContent =
              "Save Vehicle";

          }

        }

      }
    );

  }


  /* =========================================================
     ECU SELECTOR BUTTONS
  ========================================================= */

  document
    .querySelectorAll(
      ".ecu-selector-btn"
    )
    .forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const ecu =
              button.dataset.ecu;


            document
              .querySelectorAll(
                ".ecu-selector-btn"
              )
              .forEach(
                function (item) {

                  item.classList.remove(
                    "active"
                  );

                }
              );


            button.classList.add(
              "active"
            );


            document
              .querySelectorAll(
                ".ecu-list-item"
              )
              .forEach(
                function (item) {

                  if (
                    item.dataset.ecu ===
                    ecu
                  ) {

                    item.classList.add(
                      "selected"
                    );

                  } else {

                    item.classList.remove(
                      "selected"
                    );

                  }

                }
              );

          }
        );

      }
    );


  /* =========================================================
     ECU LIST
  ========================================================= */

  document
    .querySelectorAll(
      ".ecu-list-item"
    )
    .forEach(
      function (item) {

        item.addEventListener(
          "click",
          function () {

            const ecu =
              item.dataset.ecu;


            if (!ecu) {
              return;
            }


            document
              .querySelectorAll(
                ".ecu-list-item"
              )
              .forEach(
                function (row) {

                  row.classList.toggle(
                    "selected",
                    row.dataset.ecu ===
                    ecu
                  );

                }
              );


            document
              .querySelectorAll(
                ".ecu-selector-btn"
              )
              .forEach(
                function (button) {

                  button.classList.toggle(
                    "active",
                    button.dataset.ecu ===
                    ecu
                  );

                }
              );

          }
        );

      }
    );


  /* =========================================================
     DID SEARCH
  ========================================================= */

  const didSearch =
    document.getElementById(
      "didSearch"
    );


  if (didSearch) {

    didSearch.addEventListener(
      "input",
      function () {

        const text =
          this.value
            .toLowerCase()
            .trim();


        document
          .querySelectorAll(
            "#didTableBody .did-row"
          )
          .forEach(
            function (row) {

              const rowText =
                row.textContent
                  .toLowerCase();


              row.style.display =
                !text ||
                rowText.includes(text)
                  ? ""
                  : "none";

            }
          );

      }
    );

  }


  /* =========================================================
     SELECT ALL DID
  ========================================================= */

  const selectAllDid =
    document.getElementById(
      "selectAllDid"
    );


  if (selectAllDid) {

    selectAllDid.addEventListener(
      "change",
      function () {

        document
          .querySelectorAll(
            "#didTableBody input[type='checkbox']"
          )
          .forEach(
            function (checkbox) {

              checkbox.checked =
                selectAllDid.checked;

            }
          );

      }
    );

  }


  /* =========================================================
     THEME BUTTON
  ========================================================= */

  const themeToggle =
    document.getElementById(
      "themeToggle"
    );


  if (themeToggle) {

    themeToggle.addEventListener(
      "click",
      function () {

        document.body.classList.toggle(
          "dark-ui"
        );

      }
    );

  }


  /* =========================================================
     INITIALIZE
  ========================================================= */

  loadDashboard();
}

/** vehicleiq-web/portal/index.html inline "SMALL UI SCRIPT" */
export function initPortalUi() {
      // -------------------------------------------------------
      // ECU selector buttons
      // -------------------------------------------------------

      document
        .querySelectorAll(".ecu-selector-btn")
        .forEach(function (button) {

          button.addEventListener(
            "click",
            function () {

              document
                .querySelectorAll(
                  ".ecu-selector-btn"
                )
                .forEach(function (item) {

                  item.classList.remove(
                    "active"
                  );

                });


              button.classList.add(
                "active"
              );


              const ecu =
                button.dataset.ecu;


              document
                .querySelectorAll(
                  ".ecu-list-item"
                )
                .forEach(function (item) {

                  if (
                    item.dataset.ecu ===
                    ecu
                  ) {

                    item.classList.add(
                      "selected"
                    );

                  } else {

                    item.classList.remove(
                      "selected"
                    );

                  }

                });

            }
          );

        });


      // -------------------------------------------------------
      // ECU list selection
      // -------------------------------------------------------

      document
        .querySelectorAll(".ecu-list-item")
        .forEach(function (item) {

          item.addEventListener(
            "click",
            function () {

              const ecu =
                item.dataset.ecu;


              if (!ecu) {
                return;
              }


              document
                .querySelectorAll(
                  ".ecu-list-item"
                )
                .forEach(function (row) {

                  if (
                    row.dataset.ecu ===
                    ecu
                  ) {

                    row.classList.add(
                      "selected"
                    );

                  } else {

                    row.classList.remove(
                      "selected"
                    );

                  }

                });


              document
                .querySelectorAll(
                  ".ecu-selector-btn"
                )
                .forEach(function (button) {

                  if (
                    button.dataset.ecu ===
                    ecu
                  ) {

                    button.classList.add(
                      "active"
                    );

                  } else {

                    button.classList.remove(
                      "active"
                    );

                  }

                });

            }
          );

        });


      // -------------------------------------------------------
      // DID search
      // -------------------------------------------------------

      const didSearch =
        document.getElementById(
          "didSearch"
        );


      if (didSearch) {

        didSearch.addEventListener(
          "input",
          function () {

            const text =
              this.value
                .toLowerCase()
                .trim();


            document
              .querySelectorAll(
                "#didTableBody .did-row"
              )
              .forEach(function (row) {

                const rowText =
                  row.textContent
                    .toLowerCase();


                row.style.display =
                  !text ||
                  rowText.includes(text)
                    ? ""
                    : "none";

              });

          }
        );

      }


      // -------------------------------------------------------
      // Select all DID
      // -------------------------------------------------------

      const selectAllDid =
        document.getElementById(
          "selectAllDid"
        );


      if (selectAllDid) {

        selectAllDid.addEventListener(
          "change",
          function () {

            document
              .querySelectorAll(
                "#didTableBody input[type='checkbox']"
              )
              .forEach(function (checkbox) {

                checkbox.checked =
                  selectAllDid.checked;

              });

          }
        );

      }


      // -------------------------------------------------------
      // Theme button
      // -------------------------------------------------------

      const themeToggle =
        document.getElementById(
          "themeToggle"
        );


      if (themeToggle) {

        themeToggle.addEventListener(
          "click",
          function () {

            document.body.classList.toggle(
              "dark-ui"
            );

          }
        );

      }
  // =======================================================
  // SIDEBAR VIEW SWITCHING
  // =======================================================

  addDocumentListener("click", function (event) {

    const button = event.target.closest(
      ".sidebar-item[data-tab]"
    );

    if (!button) {
      return;
    }

    const key = button.dataset.tab;

    if (!key) {
      return;
    }

    const workspace =
      document.querySelector(".workspace-grid");

    const tableWrap =
      document.getElementById("tableWrap");

    if (!workspace || !tableWrap) {
      return;
    }

    // =======================================================
  // SIDEBAR VIEW SWITCHING
  // =======================================================

  addDocumentListener("click", function (event) {

    const button = event.target.closest(
      ".sidebar-item[data-tab]"
    );

    if (!button) {
      return;
    }

    const key = button.dataset.tab;

    if (!key) {
      return;
    }

    const workspace =
      document.querySelector(".workspace-grid");

    const tableWrap =
      document.getElementById("tableWrap");

    if (!workspace || !tableWrap) {
      return;
    }

    // Dashboard
    if (key === "vehicles") {

      workspace.classList.remove("tab-hidden");

      tableWrap.classList.remove("tab-visible");

      tableWrap.hidden = true;

      return;
    }

    // All database tabs
    workspace.classList.add("tab-hidden");

    tableWrap.classList.add("tab-visible");

    tableWrap.hidden = false;

    // Force visibility because the new dashboard CSS
    // hides the old table by default.
    tableWrap.style.display = "block";

  });

    // Database/data tabs
    workspace.classList.add("tab-hidden");
    tableWrap.classList.add("tab-visible");

  });
  
}
