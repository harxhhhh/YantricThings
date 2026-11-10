-- Optional seed for experiment login (run in phpMyAdmin on u938496972_CANvision).
-- Adjust column names if your `users` table differs.

-- Example if columns are: id, username, password, role
INSERT INTO users (username, password, role)
SELECT 'admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin'
FROM DUAL
WHERE NOT EXISTS (SELECT 1 FROM users WHERE username = 'admin' LIMIT 1);

-- The hash above is Laravel's demo hash for password "password".
-- Prefer creating your own:
--   UPDATE users SET password = PASSWORD_HASH_FROM_PHP WHERE username = 'admin';
-- In PHP: echo password_hash('admin123', PASSWORD_DEFAULT);

-- Until a real user exists, the experiment API accepts admin / admin123 as fallback.
