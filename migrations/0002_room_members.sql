CREATE TABLE IF NOT EXISTS room_members (
  room_code TEXT NOT NULL,
  member_id TEXT NOT NULL,
  display_name TEXT NOT NULL,
  joined_at TEXT NOT NULL,
  PRIMARY KEY (room_code, member_id)
);

CREATE INDEX IF NOT EXISTS room_members_room_code ON room_members(room_code);
