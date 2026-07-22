ALTER TABLE shows ADD COLUMN poster_url TEXT NOT NULL DEFAULT '';

UPDATE shows SET poster_url = CASE id
  WHEN 'stranger-things' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/595/1489169.jpg'
  WHEN 'wednesday' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/586/1466410.jpg'
  WHEN 'bridgerton' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/614/1535959.jpg'
  WHEN 'beef' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/621/1554643.jpg'
  WHEN 'fallout' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/599/1499142.jpg'
  WHEN 'reacher' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/633/1582513.jpg'
  WHEN 'the-boys' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/619/1547768.jpg'
  WHEN 'fleabag' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/192/482341.jpg'
  WHEN 'the-mandalorian' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/501/1253498.jpg'
  WHEN 'loki' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/478/1195717.jpg'
  WHEN 'only-murders' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/586/1466415.jpg'
  WHEN 'bluey' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/512/1281879.jpg'
  WHEN 'the-last-of-us' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/563/1409008.jpg'
  WHEN 'the-white-lotus' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/557/1393876.jpg'
  WHEN 'hacks' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/621/1552621.jpg'
  WHEN 'house-of-the-dragon' THEN 'https://static.tvmaze.com/uploads/images/original_untouched/627/1568449.jpg'
END;
