CREATE TABLE `hash_tag` (
  `id` bigint PRIMARY KEY,
  `name` varchar(100) UNIQUE NOT NULL COMMENT 'Do not allow space'
);

CREATE TABLE `sns` (
  `id` int PRIMARY KEY,
  `name` enum NOT NULL
);

CREATE TABLE `password_master` (
  `id` bigint PRIMARY KEY,
  `user_id` bigint NOT NULL,
  `master` varchar(100) NOT NULL
);

CREATE TABLE `password_category` (
  `id` bigint PRIMARY KEY,
  `user_id` bigint,
  `name` varchar(50) NOT NULL COMMENT 'Do not allow duplicate by user_id',
  `created_at` timestamp NOT NULL,
  `created_by` varchar(255) NOT NULL COMMENT 'email',
  `updated_at` timestamp NOT NULL,
  `updated_by` varchar(255) NOT NULL COMMENT 'email'
);

CREATE TABLE `password` (
  `id` bigint PRIMARY KEY,
  `user_id` bigint,
  `password_category_id` bigint,
  `name` varchar(50) NOT NULL,
  `login_id` varchar(255) NOT NULL,
  `login_password` varchar(100) COMMENT 'SNS login does not have password',
  `url` varchar(255),
  `memo` text,
  `created_at` timestamp NOT NULL,
  `created_by` varchar(255) NOT NULL COMMENT 'email',
  `updated_at` timestamp NOT NULL,
  `updated_by` varchar(255) NOT NULL COMMENT 'email'
);

CREATE TABLE `password_hash_tag` (
  `password_id` bigint,
  `hash_tag_id` bigint
);

CREATE TABLE `password_sns` (
  `password_id` bigint,
  `sns_id` int
);

ALTER TABLE `password` ADD FOREIGN KEY (`password_category_id`) REFERENCES `password_categories` (`id`);

ALTER TABLE `password_hash_tags` ADD FOREIGN KEY (`password_id`) REFERENCES `password` (`id`);

ALTER TABLE `password_hash_tags` ADD FOREIGN KEY (`hash_tag_id`) REFERENCES `hash_tags` (`id`);

ALTER TABLE `password_sns` ADD FOREIGN KEY (`password_id`) REFERENCES `password` (`id`);

ALTER TABLE `password_sns` ADD FOREIGN KEY (`sns_id`) REFERENCES `sns` (`id`);
