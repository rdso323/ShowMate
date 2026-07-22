CREATE TABLE IF NOT EXISTS shows (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  year INTEGER NOT NULL,
  platform TEXT NOT NULL,
  genres TEXT NOT NULL,
  runtime INTEGER NOT NULL,
  rating REAL NOT NULL,
  synopsis TEXT NOT NULL,
  popularity INTEGER NOT NULL,
  accent TEXT NOT NULL,
  watch_url TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS matches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  room_code TEXT NOT NULL,
  show_id TEXT NOT NULL,
  member_names TEXT NOT NULL,
  kind TEXT NOT NULL CHECK (kind IN ('match', 'fallback')),
  reason TEXT NOT NULL,
  matched_at TEXT NOT NULL,
  FOREIGN KEY (show_id) REFERENCES shows(id)
);

CREATE INDEX IF NOT EXISTS matches_room_code ON matches(room_code);

INSERT OR REPLACE INTO shows VALUES
('stranger-things', 'Stranger Things', 2016, 'netflix', '["Sci-fi","Mystery"]', 51, 8.6, 'A small town uncovers supernatural mysteries when a child disappears.', 99, '#df4c42', 'https://www.netflix.com/'),
('wednesday', 'Wednesday', 2022, 'netflix', '["Comedy","Mystery"]', 45, 8.0, 'Wednesday Addams investigates a twisted mystery at Nevermore Academy.', 97, '#7065a8', 'https://www.netflix.com/'),
('bridgerton', 'Bridgerton', 2020, 'netflix', '["Romance","Drama"]', 58, 7.4, 'Romance and scandal collide in Regency-era London''s high society.', 94, '#d58aa5', 'https://www.netflix.com/'),
('beef', 'Beef', 2023, 'netflix', '["Comedy","Drama"]', 35, 8.0, 'A road-rage incident consumes two strangers in darkly funny ways.', 91, '#d6653d', 'https://www.netflix.com/'),
('fallout', 'Fallout', 2024, 'prime', '["Sci-fi","Adventure"]', 60, 8.3, 'A sheltered vault dweller enters a strange and violent wasteland.', 98, '#dcae46', 'https://www.primevideo.com/'),
('reacher', 'Reacher', 2022, 'prime', '["Action","Thriller"]', 50, 8.0, 'A former military investigator uncovers dangerous conspiracies.', 96, '#415269', 'https://www.primevideo.com/'),
('the-boys', 'The Boys', 2019, 'prime', '["Action","Comedy"]', 60, 8.6, 'Vigilantes take on corrupt superheroes in a sharp, violent satire.', 95, '#b93631', 'https://www.primevideo.com/'),
('fleabag', 'Fleabag', 2016, 'prime', '["Comedy","Drama"]', 27, 8.7, 'A witty Londoner navigates grief, family, and spectacular mistakes.', 90, '#bd594f', 'https://www.primevideo.com/'),
('the-mandalorian', 'The Mandalorian', 2019, 'disney', '["Sci-fi","Adventure"]', 40, 8.6, 'A lone bounty hunter protects a mysterious child across the galaxy.', 97, '#667877', 'https://www.disneyplus.com/'),
('loki', 'Loki', 2021, 'disney', '["Sci-fi","Comedy"]', 50, 8.2, 'The god of mischief tumbles through a reality-bending time mystery.', 95, '#3d775d', 'https://www.disneyplus.com/'),
('only-murders', 'Only Murders in the Building', 2021, 'disney', '["Comedy","Mystery"]', 33, 8.1, 'Three true-crime fans investigate a murder in their apartment building.', 93, '#d9774a', 'https://www.disneyplus.com/'),
('bluey', 'Bluey', 2018, 'disney', '["Comedy","Family"]', 8, 9.3, 'A lovable puppy turns everyday family life into imaginative adventures.', 92, '#4f8fd3', 'https://www.disneyplus.com/'),
('the-last-of-us', 'The Last of Us', 2023, 'max', '["Drama","Thriller"]', 60, 8.7, 'Two survivors cross a broken America and form an unlikely bond.', 99, '#59624a', 'https://www.max.com/'),
('the-white-lotus', 'The White Lotus', 2021, 'max', '["Comedy","Drama"]', 60, 8.0, 'Privilege and dysfunction unravel at an extravagant resort.', 96, '#4d9f99', 'https://www.max.com/'),
('hacks', 'Hacks', 2021, 'max', '["Comedy","Drama"]', 30, 8.2, 'A legendary comedian and a young writer form an abrasive partnership.', 92, '#bd3b6d', 'https://www.max.com/'),
('house-of-the-dragon', 'House of the Dragon', 2022, 'max', '["Fantasy","Drama"]', 65, 8.3, 'A royal dynasty fractures as its heirs battle for succession.', 94, '#8b3c32', 'https://www.max.com/');
