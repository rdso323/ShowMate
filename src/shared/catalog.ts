import type { DurationBucket, Show } from "./types";

export const catalog: Show[] = [
  {
    "id": "dune-part-two-m693134",
    "title": "Dune: Part Two",
    "year": 2024,
    "platform": "max",
    "mediaType": "movie",
    "genres": [
      "Sci-fi",
      "Adventure"
    ],
    "runtime": 166,
    "rating": 8.3,
    "synopsis": "Paul Atreides unites with the Fremen while seeking revenge against conspirators who destroyed his family.",
    "popularity": 99,
    "accent": "#d6653d",
    "posterUrl": "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "inside-out-2-m1022789",
    "title": "Inside Out 2",
    "year": 2024,
    "platform": "disney",
    "mediaType": "movie",
    "genres": [
      "Animation",
      "Comedy"
    ],
    "runtime": 96,
    "rating": 7.6,
    "synopsis": "Riley's emotions face a new challenge when Anxiety joins the headquarters during puberty.",
    "popularity": 99,
    "accent": "#b93631",
    "posterUrl": "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "moana-2-m1241982",
    "title": "Moana 2",
    "year": 2024,
    "platform": "disney",
    "mediaType": "movie",
    "genres": [
      "Animation",
      "Adventure"
    ],
    "runtime": 100,
    "rating": 7,
    "synopsis": "Moana sets sail on an expansive new voyage after receiving an unexpected call from her wayfinding ancestors.",
    "popularity": 99,
    "accent": "#4f8fd3",
    "posterUrl": "https://image.tmdb.org/t/p/original/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "barbie-m346698",
    "title": "Barbie",
    "year": 2023,
    "platform": "max",
    "mediaType": "movie",
    "genres": [
      "Comedy",
      "Adventure"
    ],
    "runtime": 114,
    "rating": 7,
    "synopsis": "Barbie and Ken leave Barbie Land for the real world on a journey of self-discovery.",
    "popularity": 98,
    "accent": "#d6653d",
    "posterUrl": "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "rebel-ridge-m974602",
    "title": "Rebel Ridge",
    "year": 2024,
    "platform": "netflix",
    "mediaType": "movie",
    "genres": [
      "Action",
      "Thriller"
    ],
    "runtime": 131,
    "rating": 6.9,
    "synopsis": "A former Marine faces off against a corrupt small-town police force after they seize his cash.",
    "popularity": 98,
    "accent": "#c45c26",
    "posterUrl": "https://image.tmdb.org/t/p/original/doDGKoQzNFBnz0pYol2lkabdmFJ.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "road-house-m959429",
    "title": "Road House",
    "year": 2024,
    "platform": "prime",
    "mediaType": "movie",
    "genres": [
      "Action",
      "Thriller"
    ],
    "runtime": 121,
    "rating": 6.2,
    "synopsis": "An ex-UFC fighter takes a bouncer job in the Florida Keys and finds more trouble than expected.",
    "popularity": 98,
    "accent": "#bd594f",
    "posterUrl": "https://image.tmdb.org/t/p/original/sH7Orig1yqa6ojMLIzLDxA2GRkH.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "anyone-but-you-m1072790",
    "title": "Anyone But You",
    "year": 2023,
    "platform": "netflix",
    "mediaType": "movie",
    "genres": [
      "Romance",
      "Comedy"
    ],
    "runtime": 104,
    "rating": 6.1,
    "synopsis": "Two people fake a relationship after a disastrous first date, then get stuck together on a dream vacation.",
    "popularity": 97,
    "accent": "#59624a",
    "posterUrl": "https://image.tmdb.org/t/p/original/5qHoazZiaLe7oFBok7XlUhg96f2.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "elemental-m976573",
    "title": "Elemental",
    "year": 2023,
    "platform": "disney",
    "mediaType": "movie",
    "genres": [
      "Animation",
      "Romance"
    ],
    "runtime": 101,
    "rating": 7.6,
    "synopsis": "In a city where fire, water, land, and air live together, a fiery young woman and a go-with-the-flow guy discover something elemental.",
    "popularity": 97,
    "accent": "#bd594f",
    "posterUrl": "https://image.tmdb.org/t/p/original/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "wonka-m787699",
    "title": "Wonka",
    "year": 2023,
    "platform": "max",
    "mediaType": "movie",
    "genres": [
      "Family",
      "Fantasy"
    ],
    "runtime": 116,
    "rating": 7.1,
    "synopsis": "Young Willy Wonka embarks on a magical adventure to change the world with pure imagination.",
    "popularity": 97,
    "accent": "#dcae46",
    "posterUrl": "https://image.tmdb.org/t/p/original/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "encanto-m568124",
    "title": "Encanto",
    "year": 2021,
    "platform": "disney",
    "mediaType": "movie",
    "genres": [
      "Animation",
      "Family"
    ],
    "runtime": 102,
    "rating": 7.5,
    "synopsis": "A Colombian girl who lacks magical gifts must save her extraordinary family.",
    "popularity": 96,
    "accent": "#7a4b2a",
    "posterUrl": "https://image.tmdb.org/t/p/original/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "extraction-2-m697843",
    "title": "Extraction 2",
    "year": 2023,
    "platform": "netflix",
    "mediaType": "movie",
    "genres": [
      "Action",
      "Thriller"
    ],
    "runtime": 123,
    "rating": 7,
    "synopsis": "Tyler Rake returns for a deadlier extraction mission that pulls him into a prison fortress.",
    "popularity": 96,
    "accent": "#667877",
    "posterUrl": "https://image.tmdb.org/t/p/original/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-idea-of-you-m1010581",
    "title": "The Idea of You",
    "year": 2024,
    "platform": "prime",
    "mediaType": "movie",
    "genres": [
      "Romance",
      "Comedy"
    ],
    "runtime": 115,
    "rating": 6.5,
    "synopsis": "A 40-year-old single mom begins an unexpected romance with a world-famous boy-band singer.",
    "popularity": 96,
    "accent": "#8b3c32",
    "posterUrl": "https://image.tmdb.org/t/p/original/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "black-panther-wakanda-forever-m505642",
    "title": "Black Panther: Wakanda Forever",
    "year": 2022,
    "platform": "disney",
    "mediaType": "movie",
    "genres": [
      "Action",
      "Adventure"
    ],
    "runtime": 161,
    "rating": 6.7,
    "synopsis": "The leaders of Wakanda fight to protect their nation in the wake of King T'Challa's death.",
    "popularity": 95,
    "accent": "#c45c26",
    "posterUrl": "https://image.tmdb.org/t/p/original/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "guardians-of-the-galaxy-vol-3-m447365",
    "title": "Guardians of the Galaxy Vol. 3",
    "year": 2023,
    "platform": "disney",
    "mediaType": "movie",
    "genres": [
      "Sci-fi",
      "Adventure"
    ],
    "runtime": 150,
    "rating": 7.9,
    "synopsis": "The Guardians assemble once more to protect one of their own and face Rocket's past.",
    "popularity": 95,
    "accent": "#d6653d",
    "posterUrl": "https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "leave-the-world-behind-m1008042",
    "title": "Leave the World Behind",
    "year": 2023,
    "platform": "netflix",
    "mediaType": "movie",
    "genres": [
      "Thriller",
      "Drama"
    ],
    "runtime": 138,
    "rating": 6.5,
    "synopsis": "A family's vacation rental weekend collapses into dread when a massive blackout hits.",
    "popularity": 95,
    "accent": "#1f8a70",
    "posterUrl": "https://image.tmdb.org/t/p/original/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "air-m966220",
    "title": "Air",
    "year": 2023,
    "platform": "prime",
    "mediaType": "movie",
    "genres": [
      "Drama"
    ],
    "runtime": 111,
    "rating": 7.4,
    "synopsis": "Nike races to sign a rookie named Michael Jordan and change sports marketing forever.",
    "popularity": 94,
    "accent": "#b93631",
    "posterUrl": "https://image.tmdb.org/t/p/original/lZOODJzwuQo0etJJyBBZJOSdZcW.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "game-of-thrones",
    "title": "Game of Thrones",
    "year": 2011,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Adventure",
      "Fantasy"
    ],
    "runtime": 60,
    "rating": 8.9,
    "synopsis": "Based on the bestselling book series A Song of Ice and Fire by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. ",
    "popularity": 94,
    "accent": "#59624a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/498/1245274.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "glass-onion-m661374",
    "title": "Glass Onion",
    "year": 2022,
    "platform": "netflix",
    "mediaType": "movie",
    "genres": [
      "Mystery",
      "Comedy"
    ],
    "runtime": 139,
    "rating": 7.1,
    "synopsis": "Detective Benoit Blanc returns for a new murder mystery among tech billionaires on a private island.",
    "popularity": 94,
    "accent": "#667877",
    "posterUrl": "https://image.tmdb.org/t/p/original/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "chernobyl",
    "title": "Chernobyl",
    "year": 2019,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "History"
    ],
    "runtime": 70,
    "rating": 8.9,
    "synopsis": "Chernobyl dramatizes the true story of one of the worst man-made catastrophes in history and tells of the brave men and women who sacrificed to save Europe from unimaginable disaster. The mi",
    "popularity": 93,
    "accent": "#bd3b6d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/193/482599.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "red-notice-m512195",
    "title": "Red Notice",
    "year": 2021,
    "platform": "netflix",
    "mediaType": "movie",
    "genres": [
      "Action",
      "Comedy"
    ],
    "runtime": 118,
    "rating": 6.4,
    "synopsis": "An FBI profiler chases the world's most wanted art thief across a globe-spanning heist.",
    "popularity": 93,
    "accent": "#59624a",
    "posterUrl": "https://image.tmdb.org/t/p/original/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "soul-m508442",
    "title": "Soul",
    "year": 2020,
    "platform": "disney",
    "mediaType": "movie",
    "genres": [
      "Animation",
      "Drama"
    ],
    "runtime": 100,
    "rating": 8,
    "synopsis": "A jazz musician's soul gets stuck between Earth and the afterlife after a near-death accident.",
    "popularity": 93,
    "accent": "#4f8fd3",
    "posterUrl": "https://image.tmdb.org/t/p/original/6jmppcaubzLF8wkXM36ganVISCo.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "don-t-look-up-m646385",
    "title": "Don't Look Up",
    "year": 2021,
    "platform": "netflix",
    "mediaType": "movie",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "runtime": 138,
    "rating": 7.2,
    "synopsis": "Two astronomers try to warn humanity about an approaching comet that will destroy Earth.",
    "popularity": 92,
    "accent": "#d58aa5",
    "posterUrl": "https://image.tmdb.org/t/p/original/nD4M4Bx457ryLuKYpxFwQ2IBJ5w.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "elvis-m614934",
    "title": "Elvis",
    "year": 2022,
    "platform": "max",
    "mediaType": "movie",
    "genres": [
      "Drama",
      "Music"
    ],
    "runtime": 159,
    "rating": 7.3,
    "synopsis": "The life of Elvis Presley is seen through the prism of his complicated relationship with Colonel Tom Parker.",
    "popularity": 92,
    "accent": "#2f6fed",
    "posterUrl": "https://image.tmdb.org/t/p/original/qBOKWqAFbveZ4ryjJJwbie6tXkQ.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "luca-m508943",
    "title": "Luca",
    "year": 2021,
    "platform": "disney",
    "mediaType": "movie",
    "genres": [
      "Animation",
      "Adventure"
    ],
    "runtime": 95,
    "rating": 7.5,
    "synopsis": "A sea monster boy experiences an unforgettable summer on the Italian Riviera.",
    "popularity": 92,
    "accent": "#4f8fd3",
    "posterUrl": "https://image.tmdb.org/t/p/original/9x4i9uKGXt8IiiIF5Ey0DIoY738.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "crazy-rich-asians-m455207",
    "title": "Crazy Rich Asians",
    "year": 2018,
    "platform": "max",
    "mediaType": "movie",
    "genres": [
      "Romance",
      "Comedy"
    ],
    "runtime": 120,
    "rating": 7,
    "synopsis": "A New York professor discovers her boyfriend comes from Singapore's wealthiest family.",
    "popularity": 91,
    "accent": "#dcae46",
    "posterUrl": "https://image.tmdb.org/t/p/original/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "turning-red-m508947",
    "title": "Turning Red",
    "year": 2022,
    "platform": "disney",
    "mediaType": "movie",
    "genres": [
      "Animation",
      "Comedy"
    ],
    "runtime": 100,
    "rating": 7,
    "synopsis": "A thirteen-year-old girl turns into a giant red panda whenever she gets too excited.",
    "popularity": 91,
    "accent": "#2f6fed",
    "posterUrl": "https://image.tmdb.org/t/p/original/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "a-star-is-born-m332562",
    "title": "A Star Is Born",
    "year": 2018,
    "platform": "max",
    "mediaType": "movie",
    "genres": [
      "Drama",
      "Music"
    ],
    "runtime": 136,
    "rating": 7.4,
    "synopsis": "A seasoned musician helps a young singer find fame as his own career begins to fade.",
    "popularity": 90,
    "accent": "#3d775d",
    "posterUrl": "https://image.tmdb.org/t/p/original/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "free-guy-m550988",
    "title": "Free Guy",
    "year": 2021,
    "platform": "disney",
    "mediaType": "movie",
    "genres": [
      "Comedy",
      "Action"
    ],
    "runtime": 115,
    "rating": 7.1,
    "synopsis": "A bank teller discovers he's a background character in an open-world video game.",
    "popularity": 90,
    "accent": "#d58aa5",
    "posterUrl": "https://image.tmdb.org/t/p/original/dxraF0qPr1OEgJk17ltQTO84kQF.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "the-adam-project-m696506",
    "title": "The Adam Project",
    "year": 2022,
    "platform": "netflix",
    "mediaType": "movie",
    "genres": [
      "Sci-fi",
      "Adventure"
    ],
    "runtime": 106,
    "rating": 6.7,
    "synopsis": "A time-traveling fighter pilot teams up with his younger self to save the future.",
    "popularity": 90,
    "accent": "#1f8a70",
    "posterUrl": "https://image.tmdb.org/t/p/original/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-color-purple-m872585",
    "title": "The Color Purple",
    "year": 2023,
    "platform": "max",
    "mediaType": "movie",
    "genres": [
      "Drama",
      "Music"
    ],
    "runtime": 141,
    "rating": 7.1,
    "synopsis": "A woman faces hardship and finds sisterhood and self-worth in the American South.",
    "popularity": 90,
    "accent": "#bd3b6d",
    "posterUrl": "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "the-tomorrow-war-m588228",
    "title": "The Tomorrow War",
    "year": 2021,
    "platform": "prime",
    "mediaType": "movie",
    "genres": [
      "Sci-fi",
      "Action"
    ],
    "runtime": 138,
    "rating": 6.6,
    "synopsis": "Civilians are drafted to fight an alien war in the future that threatens humanity.",
    "popularity": 90,
    "accent": "#59624a",
    "posterUrl": "https://image.tmdb.org/t/p/original/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "aquaman-and-the-lost-kingdom-m572802",
    "title": "Aquaman and the Lost Kingdom",
    "year": 2023,
    "platform": "max",
    "mediaType": "movie",
    "genres": [
      "Action",
      "Fantasy"
    ],
    "runtime": 124,
    "rating": 6.3,
    "synopsis": "Aquaman must forge an uneasy alliance to protect Atlantis from Black Manta.",
    "popularity": 89,
    "accent": "#bd594f",
    "posterUrl": "https://image.tmdb.org/t/p/original/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "arcane-league-of-legends",
    "title": "Arcane: League of Legends",
    "year": 2021,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "runtime": 41,
    "rating": 8.5,
    "synopsis": "Set in utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions — and the power that will tear them apart.",
    "popularity": 89,
    "accent": "#8b3c32",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/536/1340287.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "friends",
    "title": "Friends",
    "year": 1994,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "runtime": 30,
    "rating": 8.5,
    "synopsis": "Six young (20-something) people from New York City (Manhattan), on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other",
    "popularity": 89,
    "accent": "#7065a8",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/41/104565.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "sh-gun",
    "title": "Shōgun",
    "year": 2024,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Adventure",
      "History"
    ],
    "runtime": 59,
    "rating": 8.5,
    "synopsis": "Shōgun is set in Japan in the year 1600 at the dawn of a century-defining civil war. Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him,",
    "popularity": 89,
    "accent": "#dcae46",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/506/1265637.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "the-gray-man-m725201",
    "title": "The Gray Man",
    "year": 2022,
    "platform": "netflix",
    "mediaType": "movie",
    "genres": [
      "Action",
      "Thriller"
    ],
    "runtime": 129,
    "rating": 6.5,
    "synopsis": "A CIA assassin becomes the target when he uncovers dark agency secrets.",
    "popularity": 89,
    "accent": "#dcae46",
    "posterUrl": "https://image.tmdb.org/t/p/original/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-mandalorian",
    "title": "The Mandalorian",
    "year": 2019,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Action",
      "Adventure",
      "Science-Fiction"
    ],
    "runtime": 40,
    "rating": 8.5,
    "synopsis": "After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. ",
    "popularity": 89,
    "accent": "#b93631",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/501/1253498.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "the-queen-s-gambit",
    "title": "The Queen's Gambit",
    "year": 2020,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama"
    ],
    "runtime": 56,
    "rating": 8.5,
    "synopsis": "Chronicling the life of an orphan chess prodigy, the story - set during the Cold War era - follows Beth Harmon from the age of eight to twenty-two, as she struggles with addiction in a quest",
    "popularity": 89,
    "accent": "#4f8fd3",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/510/1275203.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "bird-box-m405774",
    "title": "Bird Box",
    "year": 2018,
    "platform": "netflix",
    "mediaType": "movie",
    "genres": [
      "Horror",
      "Thriller"
    ],
    "runtime": 124,
    "rating": 6.6,
    "synopsis": "A mother and her children must navigate a post-apocalyptic world while blindfolded.",
    "popularity": 88,
    "accent": "#4f8fd3",
    "posterUrl": "https://image.tmdb.org/t/p/original/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "black-mirror",
    "title": "Black Mirror",
    "year": 2011,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Science-Fiction",
      "Thriller"
    ],
    "runtime": 62,
    "rating": 8.4,
    "synopsis": "Over the last ten years, technology has transformed almost every aspect of our lives before we've had time to stop and question it. In every home; on every desk; in every palm - a plasma scr",
    "popularity": 88,
    "accent": "#415269",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/564/1411764.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "narcos",
    "title": "Narcos",
    "year": 2015,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Action",
      "Crime"
    ],
    "runtime": 52,
    "rating": 8.4,
    "synopsis": "Narcos chronicle the life and death of drug lord Pablo Escobar the ruthless boss of the Medellin Cartel and a known terrorist who was also a congressman, a family man and revered by the poor",
    "popularity": 88,
    "accent": "#c45c26",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/498/1246087.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "sound-of-metal-m519015",
    "title": "Sound of Metal",
    "year": 2019,
    "platform": "prime",
    "mediaType": "movie",
    "genres": [
      "Drama",
      "Music"
    ],
    "runtime": 120,
    "rating": 7.7,
    "synopsis": "A heavy-metal drummer's life unravels when he begins to lose his hearing.",
    "popularity": 88,
    "accent": "#8b3c32",
    "posterUrl": "https://image.tmdb.org/t/p/original/8MaNntHfJPNRPJGSHo4NOmEOvVA.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "stranger-things",
    "title": "Stranger Things",
    "year": 2016,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Horror",
      "Science-Fiction"
    ],
    "runtime": 65,
    "rating": 8.4,
    "synopsis": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    "popularity": 88,
    "accent": "#c45c26",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/595/1489169.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-crown",
    "title": "The Crown",
    "year": 2016,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "History"
    ],
    "runtime": 55,
    "rating": 8.4,
    "synopsis": "The Crown tells the inside story of two of the most famous addresses in the world -- Buckingham Palace and 10 Downing Street - and the intrigues, love lives and machinations behind the great",
    "popularity": 88,
    "accent": "#bd594f",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/632/1580063.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-flash-m298618",
    "title": "The Flash",
    "year": 2023,
    "platform": "max",
    "mediaType": "movie",
    "genres": [
      "Action",
      "Sci-fi"
    ],
    "runtime": 144,
    "rating": 6.7,
    "synopsis": "Barry Allen travels through time to prevent his mother's murder and fractures the multiverse.",
    "popularity": 88,
    "accent": "#df4c42",
    "posterUrl": "https://image.tmdb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "it-chapter-two-m474350",
    "title": "It Chapter Two",
    "year": 2019,
    "platform": "max",
    "mediaType": "movie",
    "genres": [
      "Horror"
    ],
    "runtime": 169,
    "rating": 6.5,
    "synopsis": "Twenty-seven years after their first encounter, the Losers Club reunites to destroy Pennywise.",
    "popularity": 87,
    "accent": "#bd3b6d",
    "posterUrl": "https://image.tmdb.org/t/p/original/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "lucifer",
    "title": "Lucifer",
    "year": 2016,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Crime",
      "Supernatural"
    ],
    "runtime": 58,
    "rating": 8.3,
    "synopsis": "The Devil has come to Los Angeles… Based upon the characters created by Neil Gaiman, Sam Kieth and Mike Dringenberg for DC Entertainment's Vertigo imprint, Lucifer is the story of the origin",
    "popularity": 87,
    "accent": "#667877",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/346/865655.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-boys",
    "title": "The Boys",
    "year": 2019,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Action",
      "Fantasy",
      "Adult"
    ],
    "runtime": 63,
    "rating": 8.3,
    "synopsis": "In a world where superheroes embrace the darker side of their massive celebrity and fame, The Boys centres on a group of vigilantes known informally as \"The Boys,\" who set out to take down c",
    "popularity": 87,
    "accent": "#4f8fd3",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/619/1547768.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "without-remorse-m460465",
    "title": "Without Remorse",
    "year": 2021,
    "platform": "prime",
    "mediaType": "movie",
    "genres": [
      "Action",
      "Thriller"
    ],
    "runtime": 109,
    "rating": 5.8,
    "synopsis": "A Navy SEAL seeks justice after his pregnant wife is murdered in a home invasion.",
    "popularity": 87,
    "accent": "#d58aa5",
    "posterUrl": "https://image.tmdb.org/t/p/original/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "clarkson-s-farm",
    "title": "Clarkson's Farm",
    "year": 2021,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Adventure"
    ],
    "runtime": 49,
    "rating": 8.2,
    "synopsis": "Jeremy Clarkson looks into the real life of a farmer as he is faced with the challenges of running a successful farm and farm shop at his own farm, Diddly Squat Farm.",
    "popularity": 86,
    "accent": "#667877",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/628/1571785.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "dark",
    "title": "Dark",
    "year": 2017,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Science-Fiction",
      "Supernatural"
    ],
    "runtime": 56,
    "rating": 8.2,
    "synopsis": "A family saga with a supernatural twist, Dark is set in a German town in present day where the disappearance of two young children exposes the double lives and fractured relationships among ",
    "popularity": 86,
    "accent": "#7a4b2a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/504/1262352.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "i-want-you-back-m785084",
    "title": "I Want You Back",
    "year": 2022,
    "platform": "prime",
    "mediaType": "movie",
    "genres": [
      "Romance",
      "Comedy"
    ],
    "runtime": 111,
    "rating": 6.4,
    "synopsis": "Two strangers dumped on the same day team up to win their exes back.",
    "popularity": 86,
    "accent": "#b93631",
    "posterUrl": "https://image.tmdb.org/t/p/original/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "my-spy-m582566",
    "title": "My Spy",
    "year": 2020,
    "platform": "prime",
    "mediaType": "movie",
    "genres": [
      "Comedy",
      "Action"
    ],
    "runtime": 101,
    "rating": 6.4,
    "synopsis": "A hardened CIA operative is blackmailed by a nine-year-old into teaching her spy skills.",
    "popularity": 86,
    "accent": "#d6653d",
    "posterUrl": "https://image.tmdb.org/t/p/original/t4BtVY9IcGR1k8c3GNYTTLYebOw.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "reacher",
    "title": "Reacher",
    "year": 2022,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Action",
      "Thriller"
    ],
    "runtime": 50,
    "rating": 8.2,
    "synopsis": "Reacher follows Jack Reacher, a veteran military police investigator who has just recently entered civilian life. Reacher is a drifter, carrying no phone and the barest of essentials as he t",
    "popularity": 86,
    "accent": "#c45c26",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/633/1582513.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "westworld",
    "title": "Westworld",
    "year": 2016,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Science-Fiction",
      "Western"
    ],
    "runtime": 60,
    "rating": 8.2,
    "synopsis": "Westworld is a dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past, it explores a world in wh",
    "popularity": 86,
    "accent": "#4f8fd3",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/445/1113927.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "andor",
    "title": "Andor",
    "year": 2022,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Science-Fiction",
      "Thriller",
      "Espionage"
    ],
    "runtime": 48,
    "rating": 8,
    "synopsis": "Andor explores a new perspective from the Star Wars galaxy, focusing on Cassian Andor's journey to discover the difference he can make. The series brings forward the tale of the burgeoning r",
    "popularity": 85,
    "accent": "#d58aa5",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/564/1411766.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "coming-2-america-m484718",
    "title": "Coming 2 America",
    "year": 2021,
    "platform": "prime",
    "mediaType": "movie",
    "genres": [
      "Comedy"
    ],
    "runtime": 110,
    "rating": 5.8,
    "synopsis": "Prince Akeem returns to America to find an unexpected heir to the throne of Zamunda.",
    "popularity": 85,
    "accent": "#d6653d",
    "posterUrl": "https://image.tmdb.org/t/p/original/nWBPLkqNApY5pgrJFMiI9joSI30.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "loki",
    "title": "Loki",
    "year": 2021,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Action",
      "Adventure",
      "Science-Fiction"
    ],
    "runtime": 50,
    "rating": 8.1,
    "synopsis": "Loki follows the trickster and shape-shifter god who pops up throughout human history as an unlikely influencer on historical events.",
    "popularity": 85,
    "accent": "#7065a8",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/478/1195717.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "ozark",
    "title": "Ozark",
    "year": 2017,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Crime",
      "Thriller"
    ],
    "runtime": 61,
    "rating": 8.1,
    "synopsis": "In this dark, dangerous series, a family struggles after moving to an Ozarks resort community when they're thrust into a world of dirty money.",
    "popularity": 85,
    "accent": "#4f8fd3",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/398/996611.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-big-bang-theory",
    "title": "The Big Bang Theory",
    "year": 2007,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Comedy"
    ],
    "runtime": 30,
    "rating": 8,
    "synopsis": "The Big Bang Theory is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of \"beautiful minds\" that understand how the universe works. But none of that genius helps t",
    "popularity": 85,
    "accent": "#3d775d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/173/433868.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "the-marvelous-mrs-maisel",
    "title": "The Marvelous Mrs. Maisel",
    "year": 2017,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "runtime": 56,
    "rating": 8.1,
    "synopsis": "It's 1958 Manhattan and Miriam \"Midge\" Maisel has everything she's ever wanted - the perfect husband, kids, and Upper West Side apartment. But when her life suddenly takes a turn and Midge m",
    "popularity": 85,
    "accent": "#4f8fd3",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/456/1141825.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "true-detective",
    "title": "True Detective",
    "year": 2014,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Crime",
      "Thriller"
    ],
    "runtime": 60,
    "rating": 8.1,
    "synopsis": "Touch darkness and darkness touches you back. True Detective centers on troubled cops and the investigations that drive them to the edge. Each season features a new cast and a new case. True",
    "popularity": 85,
    "accent": "#b93631",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/490/1226764.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "fallout",
    "title": "Fallout",
    "year": 2024,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Action",
      "Science-Fiction"
    ],
    "runtime": 57,
    "rating": 7.9,
    "synopsis": "Based on one of the greatest video game series of all time, Fallout is the story of haves and have nots in a world in which there's almost nothing left to have. 200 years after the apocalyps",
    "popularity": 84,
    "accent": "#d6653d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/599/1499142.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "fleabag",
    "title": "Fleabag",
    "year": 2016,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "runtime": 30,
    "rating": 8,
    "synopsis": "Meet Fleabag . She's not talking to all of us - she's talking to you. So why don't you pop your top off and come right in?",
    "popularity": 84,
    "accent": "#d9774a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/192/482341.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "mare-of-easttown",
    "title": "Mare of Easttown",
    "year": 2021,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Crime",
      "Mystery"
    ],
    "runtime": 60,
    "rating": 8,
    "synopsis": "Mare of Easttown follows a small-town Pennsylvania detective who investigates a local murder at a time when her own life is crumbling around her.",
    "popularity": 84,
    "accent": "#8b3c32",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/301/753981.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "one-night-in-miami-m661542",
    "title": "One Night in Miami",
    "year": 2020,
    "platform": "prime",
    "mediaType": "movie",
    "genres": [
      "Drama"
    ],
    "runtime": 114,
    "rating": 7.1,
    "synopsis": "Four icons of the 1960s spend one night debating fame, faith, and the fight for justice.",
    "popularity": 84,
    "accent": "#4d9f99",
    "posterUrl": "https://image.tmdb.org/t/p/original/exWchxfoLn4gmNZ53vFF4htqkvG.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "the-diplomat",
    "title": "The Diplomat",
    "year": 2023,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "runtime": 49,
    "rating": 7.9,
    "synopsis": "In the midst of an international crisis, a career diplomat lands in a high-profile job she's unsuited for, with tectonic implications for her marriage and her political future.",
    "popularity": 84,
    "accent": "#d58aa5",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/589/1473527.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-last-of-us",
    "title": "The Last of Us",
    "year": 2023,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Action",
      "Horror"
    ],
    "runtime": 61,
    "rating": 7.9,
    "synopsis": "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
    "popularity": 84,
    "accent": "#4d9f99",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/563/1409008.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "the-penguin",
    "title": "The Penguin",
    "year": 2024,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Crime"
    ],
    "runtime": 63,
    "rating": 8,
    "synopsis": "Starring Colin Farrell as Oz Cobb (aka The Penguin), the DC Studios series continues filmmaker Matt Reeves' The Batman epic crime saga that began with Warner Bros. Pictures' global blockbust",
    "popularity": 84,
    "accent": "#df4c42",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/536/1340329.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "tom-clancy-s-jack-ryan",
    "title": "Tom Clancy's Jack Ryan",
    "year": 2018,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Action",
      "Espionage"
    ],
    "runtime": 51,
    "rating": 7.9,
    "synopsis": "Jack Ryan is a drama featuring Tom Clancy's popular hero Jack Ryan billed as a new contemporary take on the character in his prime as a CIA analyst/operative using the novels as source mater",
    "popularity": 84,
    "accent": "#b93631",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/486/1215704.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "wednesday",
    "title": "Wednesday",
    "year": 2022,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Mystery",
      "Supernatural"
    ],
    "runtime": 54,
    "rating": 7.9,
    "synopsis": "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    "popularity": 84,
    "accent": "#d9774a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/586/1466410.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "big-little-lies",
    "title": "Big Little Lies",
    "year": 2017,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Mystery"
    ],
    "runtime": 60,
    "rating": 7.8,
    "synopsis": "In the tranquil seaside town of Monterey, California, nothing is quite as it seems. Doting moms, successful husbands, adorable children, beautiful homes: What lies will be told to keep their",
    "popularity": 83,
    "accent": "#2f6fed",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/196/490640.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "carnival-row",
    "title": "Carnival Row",
    "year": 2019,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Fantasy",
      "Horror"
    ],
    "runtime": 55,
    "rating": 7.9,
    "synopsis": "Carnival Row is a fantasy-noir set in a neo-Victorian city. Mythical creatures fleeing their war-torn homeland have gathered in the city, and tensions are simmering between citizens and the ",
    "popularity": 83,
    "accent": "#bd594f",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/445/1114054.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "curb-your-enthusiasm",
    "title": "Curb Your Enthusiasm",
    "year": 2000,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Comedy"
    ],
    "runtime": 30,
    "rating": 7.9,
    "synopsis": "Curb Your Enthusiasm stars Seinfeld co-creator Larry David as himself in an unsparing but tongue-in-cheek depiction of his life. Shot in a verite style and featuring celebrities playing them",
    "popularity": 83,
    "accent": "#dcae46",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/500/1250735.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "good-omens",
    "title": "Good Omens",
    "year": 2019,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Fantasy",
      "Supernatural"
    ],
    "runtime": 56,
    "rating": 7.8,
    "synopsis": "According to The Nice and Accurate Prophecies of Agnes Nutter, Witch (the world's only completely accurate book of prophecies), the world will end on a Saturday. Next Saturday, in fact. Just",
    "popularity": 83,
    "accent": "#dcae46",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/625/1563341.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "heartstopper",
    "title": "Heartstopper",
    "year": 2022,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "runtime": 34,
    "rating": 7.8,
    "synopsis": "Heartstopper tells the story of Nick and Charlie, two British teens at an all-boys grammar school. Charlie, a highly-strung, openly gay over-thinker, and Nick, a cheerful, soft-hearted rugby",
    "popularity": 83,
    "accent": "#7065a8",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/632/1580747.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "invincible",
    "title": "Invincible",
    "year": 2021,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Action",
      "Science-Fiction"
    ],
    "runtime": 49,
    "rating": 7.9,
    "synopsis": "Based on the eponymous comic book, Invincible revolves around Mark Grayson, a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after ",
    "popularity": 83,
    "accent": "#bd594f",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/618/1545777.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "last-week-tonight-with-john-oliver",
    "title": "Last Week Tonight with John Oliver",
    "year": 2014,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Comedy"
    ],
    "runtime": 30,
    "rating": 7.8,
    "synopsis": "On Last Week Tonight with John Oliver , John Oliver presents a satirical look at the week in news, politics and current events.",
    "popularity": 83,
    "accent": "#667877",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/615/1537812.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "sex-education",
    "title": "Sex Education",
    "year": 2019,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "runtime": 55,
    "rating": 7.8,
    "synopsis": "Insecure Otis has all the answers when it comes to sex advice, thanks to his therapist mom. So rebel Maeve proposes a school sex-therapy clinic.",
    "popularity": 83,
    "accent": "#7065a8",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/483/1209495.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "squid-game",
    "title": "Squid Game",
    "year": 2021,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Thriller",
      "Mystery"
    ],
    "runtime": 59,
    "rating": 7.9,
    "synopsis": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    "popularity": 83,
    "accent": "#3d775d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/576/1440521.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-umbrella-academy",
    "title": "The Umbrella Academy",
    "year": 2019,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Action",
      "Science-Fiction"
    ],
    "runtime": 51,
    "rating": 7.9,
    "synopsis": "Reunited by their father's death, estranged siblings with extraordinary powers uncover shocking family secrets — and a looming threat to humanity.",
    "popularity": 83,
    "accent": "#bd594f",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/529/1324589.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-witcher",
    "title": "The Witcher",
    "year": 2019,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Action",
      "Fantasy"
    ],
    "runtime": 57,
    "rating": 7.8,
    "synopsis": "Based on the best-selling fantasy series, The Witcher is an epic tale of fate and family. Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people ofte",
    "popularity": 83,
    "accent": "#dcae46",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/594/1486674.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "hawkeye",
    "title": "Hawkeye",
    "year": 2021,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Action",
      "Adventure"
    ],
    "runtime": 48,
    "rating": 7.8,
    "synopsis": "Marvel Studios' Hawkeye is an original new series set in post-blip New York City where former Avenger Clint Barton aka Hawkeye has a seemingly simple mission: get back to his family for Chri",
    "popularity": 82,
    "accent": "#667877",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/383/959105.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "moon-knight",
    "title": "Moon Knight",
    "year": 2022,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "runtime": 50,
    "rating": 7.7,
    "synopsis": "When Steven Grant, a mild-mannered gift-shop employee, becomes plagued with blackouts and memories of another life, he discovers he has dissociative identity disorder and shares a body with ",
    "popularity": 82,
    "accent": "#3d775d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/407/1019370.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "one-piece",
    "title": "One Piece",
    "year": 2023,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "runtime": 58,
    "rating": 7.7,
    "synopsis": "With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular manga.",
    "popularity": 82,
    "accent": "#bd594f",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/617/1543011.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "patriot",
    "title": "Patriot",
    "year": 2015,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Espionage"
    ],
    "runtime": 47,
    "rating": 7.8,
    "synopsis": "To prevent Iran from going nuclear, intelligence officer John Tavner must forgo all safety nets and assume a perilous \"non-official cover\" -- that of a mid-level employee at a Midwestern ind",
    "popularity": 82,
    "accent": "#d6653d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/174/435479.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "the-night-agent",
    "title": "The Night Agent",
    "year": 2023,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Action",
      "Thriller",
      "Mystery"
    ],
    "runtime": 51,
    "rating": 7.7,
    "synopsis": "The Night Agent is a sophisticated, character-based, action-thriller centering on a low-level FBI Agent who works in the basement of the White House, manning a phone that never rings — until",
    "popularity": 82,
    "accent": "#c45c26",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/614/1536331.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-peripheral",
    "title": "The Peripheral",
    "year": 2022,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Science-Fiction"
    ],
    "runtime": 63,
    "rating": 7.7,
    "synopsis": "The Peripheral revolves around Flynne Fisher, a woman in a near-future America in which technology has started to subtly alter society. Flynne discovers a hidden connection to a very differe",
    "popularity": 82,
    "accent": "#df4c42",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/445/1112626.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "the-terminal-list",
    "title": "The Terminal List",
    "year": 2022,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Action",
      "Thriller"
    ],
    "runtime": 58,
    "rating": 7.7,
    "synopsis": "Based on the best-selling novel by Jack Carr, The Terminal List follows James Reece after his entire platoon of Navy SEALs is ambushed during a high-stakes covert mission. Reece returns home",
    "popularity": 82,
    "accent": "#4f8fd3",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/445/1114091.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "upload",
    "title": "Upload",
    "year": 2020,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Science-Fiction",
      "Mystery"
    ],
    "runtime": 33,
    "rating": 7.7,
    "synopsis": "Upload is a sci-fi sitcom that takes place in the near future, where people who are near death can be \"uploaded\" into a virtual afterlife of their choice. In 2033, secretly romantic Brooklyn",
    "popularity": 82,
    "accent": "#415269",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/586/1466414.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "veep",
    "title": "Veep",
    "year": 2012,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Comedy"
    ],
    "runtime": 30,
    "rating": 7.8,
    "synopsis": "Former Senator Selina Meyer has accepted the call to serve as Vice President of the United States. The job is nothing like she imagined and everything she was warned about. Veep follows Meye",
    "popularity": 82,
    "accent": "#d58aa5",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/189/472887.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "3-body-problem",
    "title": "3 Body Problem",
    "year": 2024,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Science-Fiction",
      "Thriller"
    ],
    "runtime": 55,
    "rating": 7.6,
    "synopsis": "Across continents and decades, five brilliant friends make earth-shattering discoveries as the laws of science unravel and an existential threat emerges.",
    "popularity": 81,
    "accent": "#bd3b6d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/507/1268925.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "ahsoka",
    "title": "Ahsoka",
    "year": 2023,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Action",
      "Adventure",
      "Science-Fiction"
    ],
    "runtime": 45,
    "rating": 7.6,
    "synopsis": "Set after the fall of the Empire, Ahsoka follows the former Jedi knight Ahsoka Tano as she investigates an emerging threat to a vulnerable galaxy.",
    "popularity": 81,
    "accent": "#7065a8",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/473/1184972.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "house-of-the-dragon",
    "title": "House of the Dragon",
    "year": 2022,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Action",
      "Fantasy"
    ],
    "runtime": 66,
    "rating": 7.6,
    "synopsis": "Set 200 years before the events of Game of Thrones, House of the Dragon tells the history of House Targaryen as they fight through a civil war.",
    "popularity": 81,
    "accent": "#df4c42",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/627/1568449.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "never-have-i-ever",
    "title": "Never Have I Ever",
    "year": 2020,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "runtime": 29,
    "rating": 7.7,
    "synopsis": "After a traumatic year, an Indian-American teen just wants to spruce up her social status — but friends, family and feelings won't make it easy on her.",
    "popularity": 81,
    "accent": "#d58aa5",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/461/1152604.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "wandavision",
    "title": "WandaVision",
    "year": 2021,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Science-Fiction"
    ],
    "runtime": 36,
    "rating": 7.6,
    "synopsis": "WandaVision blends the style of classic sitcoms with the Marvel Cinematic Universe in which Wanda Maximoff and Vision—two super-powered beings living their ideal suburban lives—begin to susp",
    "popularity": 81,
    "accent": "#415269",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/295/738028.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "catastrophe",
    "title": "Catastrophe",
    "year": 2015,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "runtime": 35,
    "rating": 7.6,
    "synopsis": "Rob Delaney and Sharon Horgan write/star in a comedy that follows a man and a woman who make a bloody mess as they struggle to fall in love in London.",
    "popularity": 80,
    "accent": "#df4c42",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/189/473908.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "succession",
    "title": "Succession",
    "year": 2018,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Family"
    ],
    "runtime": 63,
    "rating": 7.5,
    "synopsis": "Succession follows the saga of the Roys, a fictional, American global-media family that is not only rich and powerful but also powerfully dysfunctional. The drama will explore family loyalty",
    "popularity": 80,
    "accent": "#3d775d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/453/1134275.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "under-the-bridge",
    "title": "Under the Bridge",
    "year": 2024,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Crime"
    ],
    "runtime": 48,
    "rating": 7.6,
    "synopsis": "Limited series based on Rebecca Godfrey's book about the 1997 true story of a fourteen-year-old who went to join friends at a party and never returned home 14-year-old Reena Virk joined frie",
    "popularity": 80,
    "accent": "#d58aa5",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/592/1480211.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "you",
    "title": "You",
    "year": 2018,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Romance",
      "Thriller"
    ],
    "runtime": 52,
    "rating": 7.5,
    "synopsis": "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
    "popularity": 80,
    "accent": "#1f8a70",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/564/1412472.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "barry",
    "title": "Barry",
    "year": 2018,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Crime"
    ],
    "runtime": 30,
    "rating": 7.4,
    "synopsis": "Barry is a dark comedy about a depressed, low-rent hitman from the Midwest. Lonely and dissatisfied in his life, he reluctantly travels to Los Angeles to execute a hit on an aspiring actor. ",
    "popularity": 79,
    "accent": "#bd3b6d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/455/1138151.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "hacks",
    "title": "Hacks",
    "year": 2021,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "runtime": 33,
    "rating": 7.4,
    "synopsis": "Hacks explores a dark mentorship that forms between Deborah Vance, a legendary Las Vegas comedian, and an entitled, outcast 25-year-old.",
    "popularity": 79,
    "accent": "#d58aa5",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/621/1552621.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "paradise",
    "title": "Paradise",
    "year": 2025,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "runtime": 52,
    "rating": 7.4,
    "synopsis": "Paradise is set in a serene community inhabited by some of the world's most prominent individuals. But this tranquillity explodes when a shocking murder occurs and a high-stakes investigatio",
    "popularity": 79,
    "accent": "#d6653d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/614/1536865.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "shadow-and-bone",
    "title": "Shadow and Bone",
    "year": 2021,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "runtime": 57,
    "rating": 7.4,
    "synopsis": "Dark forces conspire against orphan mapmaker Alina Starkov when she unleashes an extraordinary power that could change the fate of her war-torn world.",
    "popularity": 79,
    "accent": "#4f8fd3",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/447/1118982.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-handmaid-s-tale",
    "title": "The Handmaid's Tale",
    "year": 2017,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Science-Fiction"
    ],
    "runtime": 52,
    "rating": 7.4,
    "synopsis": "The Handmaid's Tale is the story of life in the dystopia of Gilead, a totalitarian society in what was formerly the United States. Facing environmental disasters and a plunging birthrate, Gi",
    "popularity": 79,
    "accent": "#8b3c32",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/562/1406667.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "the-sandman",
    "title": "The Sandman",
    "year": 2022,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "runtime": 51,
    "rating": 7.4,
    "synopsis": "A rich blend of modern myth and dark fantasy in which contemporary fiction, historical drama and legend are seamlessly interwoven, The Sandman follows the people and places affected by Morph",
    "popularity": 79,
    "accent": "#d9774a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/423/1059631.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "behind-her-eyes",
    "title": "Behind Her Eyes",
    "year": 2021,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Fantasy",
      "Thriller",
      "Mystery"
    ],
    "runtime": 50,
    "rating": 7.3,
    "synopsis": "Since her husband walked out, Louise has made her son her world, supporting them both with her part-time job in a psychiatrist's office. Her world is thrown off kilter when she begins an aff",
    "popularity": 78,
    "accent": "#415269",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/295/739434.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "bridgerton",
    "title": "Bridgerton",
    "year": 2020,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Romance"
    ],
    "runtime": 63,
    "rating": 7.3,
    "synopsis": "Based on Julia Quinn's best-selling series of novels, Bridgerton is set in the sexy, lavish and competitive world of Regency London high society. From the glittering ballrooms of Mayfair to ",
    "popularity": 78,
    "accent": "#d58aa5",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/614/1535959.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "dopesick",
    "title": "Dopesick",
    "year": 2021,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Drama"
    ],
    "runtime": 61,
    "rating": 7.8,
    "synopsis": "Samuel Finnix, an old-school doctor who approaches his practice with kindness and compassion, but finds himself embroiled in Big Pharma's deadly secret.",
    "popularity": 78,
    "accent": "#b93631",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/592/1480209.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "gen-v",
    "title": "Gen V",
    "year": 2023,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Action",
      "Science-Fiction"
    ],
    "runtime": 47,
    "rating": 7.3,
    "synopsis": "From the world of The Boys comes Gen V , a thrilling new series set at America's only college for superheroes. These gifted students put their moral boundaries to the test, competing for the",
    "popularity": 78,
    "accent": "#2f6fed",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/587/1469203.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "lockwood-co",
    "title": "Lockwood & Co.",
    "year": 2023,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "runtime": 43,
    "rating": 7.3,
    "synopsis": "In London, where the most gifted teenage ghost-hunters venture nightly into perilous combat with deadly spirits, amidst the many corporate, adult-run agencies, one stands alone: independent ",
    "popularity": 78,
    "accent": "#7065a8",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/441/1103837.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "obi-wan-kenobi",
    "title": "Obi-Wan Kenobi",
    "year": 2022,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Action",
      "Adventure",
      "Science-Fiction"
    ],
    "runtime": 45,
    "rating": 7.3,
    "synopsis": "The series begins 10 years after the dramatic events of Star Wars: Revenge of the Sith, where Obi-Wan faced his greatest defeat, the downfall, and corruption of his best friend and Jedi appr",
    "popularity": 78,
    "accent": "#7a4b2a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/498/1246074.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "the-bear",
    "title": "The Bear",
    "year": 2022,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Food"
    ],
    "runtime": 35,
    "rating": 7.3,
    "synopsis": "Carmy, a young fine-dining chef, comes home to Chicago to run his family sandwich shop. As he fights to transform the shop and himself, he works alongside a rough-around-the-edges crew that ",
    "popularity": 78,
    "accent": "#c45c26",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/629/1574642.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "alien-earth",
    "title": "Alien: Earth",
    "year": 2025,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Horror",
      "Science-Fiction",
      "Thriller"
    ],
    "runtime": 79,
    "rating": 7.2,
    "synopsis": "When the mysterious deep space research vessel USCSS Maginot crash-lands on Earth, Wendy and a ragtag group of tactical soldiers make a fateful discovery that puts them face-to-face with the",
    "popularity": 77,
    "accent": "#df4c42",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/586/1466409.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "dune-prophecy",
    "title": "Dune: Prophecy",
    "year": 2024,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Science-Fiction"
    ],
    "runtime": 68,
    "rating": 7.2,
    "synopsis": "From the expansive universe of Dune , 10,000 years before the ascension of Paul Atreides, Dune: Prophecy follows two Harkonnen sisters as they combat forces that threaten the future of human",
    "popularity": 77,
    "accent": "#1f8a70",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/543/1358056.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "gossip-girl",
    "title": "Gossip Girl",
    "year": 2007,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Romance"
    ],
    "runtime": 60,
    "rating": 7.3,
    "synopsis": "The privileged prep school teens on Manhattan's Upper East Side first learn that notorious party girl Serena van der Woodsen is back in town the way they learn all the important news in thei",
    "popularity": 77,
    "accent": "#7a4b2a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/499/1247570.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "sharp-objects",
    "title": "Sharp Objects",
    "year": 2018,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "runtime": 60,
    "rating": 7.2,
    "synopsis": "Sharp Objects centers on reporter Camille Preaker who, fresh from a brief stay at a psychiatric hospital, must return to her tiny hometown to cover the murders of two preteen girls. Trying t",
    "popularity": 77,
    "accent": "#3d775d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/156/391025.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "solar-opposites",
    "title": "Solar Opposites",
    "year": 2020,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Science-Fiction"
    ],
    "runtime": 23,
    "rating": 7.2,
    "synopsis": "Solar Opposites centers around a team of four aliens escape their exploding home world only to crash land into a move-in ready home in suburban America. They are evenly split on whether Eart",
    "popularity": 77,
    "accent": "#667877",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/592/1480191.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "sweet-magnolias",
    "title": "Sweet Magnolias",
    "year": 2020,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Romance"
    ],
    "runtime": 50,
    "rating": 7.2,
    "synopsis": "Lifelong friends Maddie, Helen and Dana Sue lift each other up as they juggle relationships, family and careers in the small Southern town of Serenity.",
    "popularity": 77,
    "accent": "#7a4b2a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/628/1571289.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-wheel-of-time",
    "title": "The Wheel of Time",
    "year": 2021,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Adventure",
      "Fantasy"
    ],
    "runtime": 64,
    "rating": 7.2,
    "synopsis": "The Wheel of Time is set in a sprawling, epic world where magic exists, but only women can use it safely. Meaning that in this series — women hold the keys to power. The story follows Moirai",
    "popularity": 77,
    "accent": "#3d775d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/564/1411765.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "transparent",
    "title": "Transparent",
    "year": 2014,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "runtime": 28,
    "rating": 7.3,
    "synopsis": "In Transparent , an LA family with serious boundary issues have their past and future unravel when a dramatic admission causes everyone's secrets to spill out.",
    "popularity": 77,
    "accent": "#b93631",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/210/525553.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "virgin-river",
    "title": "Virgin River",
    "year": 2019,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Romance"
    ],
    "runtime": 46,
    "rating": 7.2,
    "synopsis": "Melinda Monroe answers an ad to work as a nurse practitioner in the remote California town of Virgin River thinking it will be the perfect place to start fresh and leave her painful memories",
    "popularity": 77,
    "accent": "#dcae46",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/617/1544047.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "what-if",
    "title": "What If...?",
    "year": 2021,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Action",
      "Adventure",
      "Science-Fiction"
    ],
    "runtime": 31,
    "rating": 7.2,
    "synopsis": "What If…? flips the script on the MCU by reimagining events from the films in unexpected ways. Marvel Studios' first animated series focuses on different heroes from the MCU, featuring a voi",
    "popularity": 77,
    "accent": "#7a4b2a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/543/1358372.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "hunters",
    "title": "Hunters",
    "year": 2020,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama"
    ],
    "runtime": 60,
    "rating": 7.1,
    "synopsis": "Hunters follows a diverse band of Nazi Hunters living in 1977 New York City. The Hunters, as they're known, have discovered that hundreds of high ranking Nazi officials are living among us a",
    "popularity": 76,
    "accent": "#8b3c32",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/234/585525.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "monsters",
    "title": "Monsters",
    "year": 1988,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Horror",
      "Science-Fiction"
    ],
    "runtime": 30,
    "rating": 7.2,
    "synopsis": "This half-hour anthology series each week features a unique monster in a story with a typical twist at the end.",
    "popularity": 76,
    "accent": "#415269",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/18/46504.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "national-treasure",
    "title": "National Treasure",
    "year": 2016,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Drama"
    ],
    "runtime": 60,
    "rating": 7.3,
    "synopsis": "Jack Thorne's compelling and timely new four part serial drama, National Treasure , examines accusations of sexual misconduct against a fictional public figure and explores their impact on t",
    "popularity": 76,
    "accent": "#d9774a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/75/188814.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "the-flight-attendant",
    "title": "The Flight Attendant",
    "year": 2020,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Thriller",
      "Mystery"
    ],
    "runtime": 44,
    "rating": 7.1,
    "synopsis": "Flight attendant Cassie Bowden relishes her globe-trotting lifestyle, but her history with drinking – and penchant for becoming entangled in international intrigue – always seem to catch up ",
    "popularity": 76,
    "accent": "#59624a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/445/1113526.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "the-lord-of-the-rings-the-rings-of-power",
    "title": "The Lord of the Rings: The Rings of Power",
    "year": 2022,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Adventure",
      "Fantasy"
    ],
    "runtime": 68,
    "rating": 7.1,
    "synopsis": "Set thousands of years before the events of The Lord of the Rings, this epic drama follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergenc",
    "popularity": 76,
    "accent": "#3d775d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/538/1346107.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "watchmen",
    "title": "Watchmen",
    "year": 2019,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Action",
      "Science-Fiction"
    ],
    "runtime": 60,
    "rating": 7.1,
    "synopsis": "Based on the DC Comic graphic novel, Watchmen is an alternative history series following a group of costumed crimefighters investigating the murder of one of their own.",
    "popularity": 76,
    "accent": "#bd594f",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/212/530211.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "beef",
    "title": "BEEF",
    "year": 2023,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "runtime": 39,
    "rating": 7,
    "synopsis": "They're frustrated, furious — and finally feeling something. Two strangers act on their darkest impulses in the aftermath of a road-rage incident.",
    "popularity": 75,
    "accent": "#59624a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/621/1554643.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "bluey",
    "title": "Bluey",
    "year": 2018,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Children"
    ],
    "runtime": 7,
    "rating": 7,
    "synopsis": "Bluey is an inexhaustible six year-old Blue Heeler dog, who loves to play and turns everyday family life into extraordinary adventures, developing her imagination as well as her mental, phys",
    "popularity": 75,
    "accent": "#8b3c32",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/512/1281879.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "ginny-georgia",
    "title": "Ginny & Georgia",
    "year": 2021,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Crime"
    ],
    "runtime": 59,
    "rating": 7,
    "synopsis": "Free-spirited Georgia and her two kids, Ginny and Austin, move north in search of a fresh start but find that the road to new beginnings can be bumpy.",
    "popularity": 75,
    "accent": "#c45c26",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/570/1427139.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "maid",
    "title": "MAID",
    "year": 2021,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "runtime": 55,
    "rating": 7.1,
    "synopsis": "After fleeing an abusive relationship, a young mother finds a job cleaning houses as she fights to provide for her child and build them a better future.",
    "popularity": 75,
    "accent": "#4f8fd3",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/498/1246071.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "reservation-dogs",
    "title": "Reservation Dogs",
    "year": 2021,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "runtime": 28,
    "rating": 7,
    "synopsis": "Reservation Dogs follows four Native teenagers in rural Oklahoma who spend their days committing crime... and fighting it.",
    "popularity": 75,
    "accent": "#59624a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/475/1189118.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "ripley",
    "title": "Ripley",
    "year": 2024,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Crime",
      "Thriller"
    ],
    "runtime": 56,
    "rating": 7,
    "synopsis": "Ripley follows Tom Ripley, a grifter scraping by in early 1960s New York, who is hired by a wealthy man to try to convince his vagabond son, Dickie Greenleaf, who is living a comfortable, tr",
    "popularity": 75,
    "accent": "#4f8fd3",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/500/1252264.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "the-white-lotus",
    "title": "The White Lotus",
    "year": 2021,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "runtime": 64,
    "rating": 6.9,
    "synopsis": "A social satire set at an exclusive tropical resort, The White Lotus follows the exploits of various guests and employees over the span of a week.",
    "popularity": 75,
    "accent": "#bd594f",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/557/1393876.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "baby-reindeer",
    "title": "Baby Reindeer",
    "year": 2024,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "runtime": 34,
    "rating": 6.9,
    "synopsis": "Based on a compelling true story, the hit 2019 Edinburgh Fringe one-man stage-play Baby Reindeer follows the writer and performer Richard Gadd's warped relationship with his female stalker a",
    "popularity": 74,
    "accent": "#3d775d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/578/1447075.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "emily-in-paris",
    "title": "Emily in Paris",
    "year": 2020,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "runtime": 32,
    "rating": 6.9,
    "synopsis": "After landing her dream job in Paris, Chicago marketing exec Emily Cooper embraces her adventurous new life while juggling work, friends and romance.",
    "popularity": 74,
    "accent": "#bd3b6d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/604/1510920.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "euphoria",
    "title": "Euphoria",
    "year": 2019,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Crime",
      "Thriller"
    ],
    "runtime": 62,
    "rating": 6.8,
    "synopsis": "Euphoria follows a group of high school students as they navigate love and friendships in a world of drugs, sex, trauma, and social media.",
    "popularity": 74,
    "accent": "#8b3c32",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/621/1552657.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "only-murders",
    "title": "Only Murders in the Building",
    "year": 2021,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Crime",
      "Mystery"
    ],
    "runtime": 35,
    "rating": 6.8,
    "synopsis": "Only Murders in the Building follows three New Yorkers who find they have a mutual interest in solving true crime – but limit their amateur sleuthing to only murders in their building.",
    "popularity": 74,
    "accent": "#b93631",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/586/1466415.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "outer-banks",
    "title": "Outer Banks",
    "year": 2020,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Adventure",
      "Crime",
      "Mystery"
    ],
    "runtime": 52,
    "rating": 6.9,
    "synopsis": "On an island of haves and have-nots, teen John B enlists his three best friends to hunt for a legendary treasure linked to his father's disappearance.",
    "popularity": 74,
    "accent": "#415269",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/629/1573432.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "inventing-anna",
    "title": "Inventing Anna",
    "year": 2022,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama"
    ],
    "runtime": 68,
    "rating": 6.7,
    "synopsis": "In Inventing Anna , a journalist with a lot to prove investigates the case of Anna Delvey, the Instagram-legendary German heiress who stole the hearts of New York's social scene – and stole ",
    "popularity": 73,
    "accent": "#3d775d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/557/1393394.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "our-flag-means-death",
    "title": "Our Flag Means Death",
    "year": 2022,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Adventure"
    ],
    "runtime": 30,
    "rating": 6.7,
    "synopsis": "Our Flag Means Death is loosely based on the true adventures of Stede Bonnet, a pampered aristocrat who abandoned his life of privilege to become a pirate.",
    "popularity": 73,
    "accent": "#3d775d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/484/1212420.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "percy-jackson-and-the-olympians",
    "title": "Percy Jackson and the Olympians",
    "year": 2023,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Adventure",
      "Fantasy",
      "Supernatural"
    ],
    "runtime": 40,
    "rating": 6.7,
    "synopsis": "12-year-old modern demigod Percy Jackson has just come to terms with his newfound supernatural powers when the sky god Zeus accuses him of stealing his master lightning bolt. Now Percy must ",
    "popularity": 73,
    "accent": "#d9774a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/602/1505524.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "anne-rice-s-interview-with-the-vampire",
    "title": "Anne Rice's Interview with the Vampire",
    "year": 2022,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Horror",
      "Supernatural"
    ],
    "runtime": 56,
    "rating": 6.6,
    "synopsis": "Based on Anne Rice's iconic and bestselling novel, Anne Rice's Interview with the Vampire follows Louis de Pointe, Lestat de Lioncourt and Claudia's epic story of love, blood and the perils ",
    "popularity": 72,
    "accent": "#c45c26",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/469/1173859.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "kaos",
    "title": "Kaos",
    "year": 2024,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Fantasy"
    ],
    "runtime": 50,
    "rating": 6.7,
    "synopsis": "Zeus: King of the gods, ruler of the world. He's cruel, stylish and all-powerful. That is, until he's not. Having long enjoyed his status as king of the gods, Zeus's reign has never been tru",
    "popularity": 72,
    "accent": "#d9774a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/533/1332932.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "win-or-lose",
    "title": "Win or Lose",
    "year": 2025,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Family",
      "Sports"
    ],
    "runtime": 25,
    "rating": 6.7,
    "synopsis": "Win or Lose , Pixar Animation Studios' first-ever original series, follows the intertwined stories of eight different characters as they each prepare for their big championship softball game",
    "popularity": 72,
    "accent": "#7a4b2a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/557/1393426.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "homecoming",
    "title": "Homecoming",
    "year": 2018,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "runtime": 30,
    "rating": 6.5,
    "synopsis": "Homecoming follows Heidi, a Homecoming Transition Support Center caseworker who helps recently returned soldier Walter transition to everyday life after deployment. But as the pair get close",
    "popularity": 71,
    "accent": "#c45c26",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/258/645021.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "money-heist-korea-joint-economic-area",
    "title": "Money Heist: Korea - Joint Economic Area",
    "year": 2022,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Crime",
      "Thriller"
    ],
    "runtime": 70,
    "rating": 6.6,
    "synopsis": "Thieves overtake the mint of a unified Korea. With hostages trapped inside, the police must stop them — as well as the shadowy mastermind behind it all.",
    "popularity": 71,
    "accent": "#d9774a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/430/1076004.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "abbott-elementary",
    "title": "Abbott Elementary",
    "year": 2021,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Comedy"
    ],
    "runtime": 30,
    "rating": 6.3,
    "synopsis": "In this workplace comedy, a group of dedicated, passionate teachers — and a slightly tone-deaf principal — are brought together in a Philadelphia public school where, despite the odds stacke",
    "popularity": 70,
    "accent": "#8b3c32",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/586/1467109.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "agatha-all-along",
    "title": "Agatha All Along",
    "year": 2024,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Action",
      "Science-Fiction"
    ],
    "runtime": 40,
    "rating": 6.4,
    "synopsis": "In Agatha All Along , the infamous Agatha Harkness finds herself down and out of power after a suspicious goth Teen helps break her free from a distorted spell. Her interest is piqued when h",
    "popularity": 70,
    "accent": "#bd3b6d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/536/1340567.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "citadel",
    "title": "Citadel",
    "year": 2023,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Action",
      "Thriller",
      "Espionage"
    ],
    "runtime": 43,
    "rating": 6.4,
    "synopsis": "Eight years ago, Citadel, an independent global spy agency, was destroyed by a new syndicate, Manticore. With their memories wiped, elite agents Mason Kane and Nadia Sinh barely escaped with",
    "popularity": 70,
    "accent": "#df4c42",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/624/1560435.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "daisy-jones-the-six",
    "title": "Daisy Jones & the Six",
    "year": 2023,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Music"
    ],
    "runtime": 50,
    "rating": 6.1,
    "synopsis": "Daisy Jones &amp; the Six follows the story of the iconic 1970s band, fronted by two feuding yet charismatic lead singers, Daisy Jones and Billy Dunne. Drawn together by personal and artisti",
    "popularity": 70,
    "accent": "#2f6fed",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/447/1118912.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "dead-ringers",
    "title": "Dead Ringers",
    "year": 2023,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Horror",
      "Thriller"
    ],
    "runtime": 59,
    "rating": 6,
    "synopsis": "Elliot and Beverly Mantle are OBGYNs and identical twins who share everything: drugs, lovers, and an unapologetic desire to do whatever it takes - including pushing the boundaries of medical",
    "popularity": 70,
    "accent": "#2f6fed",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/458/1145737.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "expats",
    "title": "Expats",
    "year": 2024,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama"
    ],
    "runtime": 64,
    "rating": 4.7,
    "synopsis": "Set against the backdrop of The Vertical City of Hong Kong, The Expatriates is a drama series that will explore the vibrant lives of a close-knit expatriate community: where affluence is cel",
    "popularity": 70,
    "accent": "#4f8fd3",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/500/1251454.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "fleishman-is-in-trouble",
    "title": "Fleishman is in Trouble",
    "year": 2022,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama"
    ],
    "runtime": 52,
    "rating": 6,
    "synopsis": "The series centers on recently separated fortysomething Toby Fleishman, who dives into the brave new world of app-based dating with the kind of success he never had dating in his youth, befo",
    "popularity": 70,
    "accent": "#667877",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/436/1090938.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "high-school-musical-the-musical-the-series",
    "title": "High School Musical: The Musical: The Series",
    "year": 2019,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Music"
    ],
    "runtime": 37,
    "rating": 6.7,
    "synopsis": "High School Musical: The Musical: The Series picks up nearly 15 years after the original movie aired at the real-life location where it all began: East High. It follows a group of students a",
    "popularity": 70,
    "accent": "#d6653d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/465/1164995.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "industry",
    "title": "Industry",
    "year": 2020,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama"
    ],
    "runtime": 60,
    "rating": 6.4,
    "synopsis": "Industry follows a group of young graduates competing for a limited set of permanent positions at a top investment bank in London—but the boundaries between colleague, friend, lover, and ene",
    "popularity": 70,
    "accent": "#d58aa5",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/608/1521293.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "insecure",
    "title": "Insecure",
    "year": 2016,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "runtime": 30,
    "rating": 5.5,
    "synopsis": "Insecure focuses on the awkward experiences and racy tribulations of a modern day African-American woman through the eyes of Issa Dee, played by Issa Rae. Jay Ellis will play Lawrence, Issa'",
    "popularity": 70,
    "accent": "#c45c26",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/485/1213250.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "love-is-blind",
    "title": "Love Is Blind",
    "year": 2020,
    "platform": "netflix",
    "mediaType": "tv",
    "genres": [
      "Romance"
    ],
    "runtime": 61,
    "rating": 5.3,
    "synopsis": "With no distractions from the outside world, the singles talk to a stream of potential love interests and when a meaningful connection is made, they propose and then lay their eyes on their ",
    "popularity": 70,
    "accent": "#4d9f99",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/613/1533160.jpg",
    "watchUrl": "https://www.netflix.com/"
  },
  {
    "id": "mr-mrs-smith",
    "title": "Mr. & Mrs. Smith",
    "year": 2024,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Action"
    ],
    "runtime": 49,
    "rating": 5.9,
    "synopsis": "Meet the Smiths: two lonely strangers, John and Jane, who have given up their lives and identities to be thrown together as partners – both in espionage and in marriage.",
    "popularity": 70,
    "accent": "#df4c42",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/502/1256101.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "ms-marvel",
    "title": "Ms. Marvel",
    "year": 2022,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Action",
      "Science-Fiction"
    ],
    "runtime": 46,
    "rating": 6.2,
    "synopsis": "Ms. Marvel introduces viewers to Kamala, a 16-year old Pakistani American from Jersey City. An aspiring artist, an avid gamer, and a voracious fan-fiction scribe, she is a huge fan of the Av",
    "popularity": 70,
    "accent": "#d9774a",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/405/1013952.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "pretty-little-liars",
    "title": "Pretty Little Liars",
    "year": 2022,
    "platform": "max",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Horror",
      "Thriller"
    ],
    "runtime": 50,
    "rating": 5.9,
    "synopsis": "Pretty Little Liars takes viewers to Millwood, a blue-collar town still healing from tragic events that took place 20 years ago. An unknown assailant has begun tormenting a disparate group o",
    "popularity": 70,
    "accent": "#7065a8",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/521/1303358.jpg",
    "watchUrl": "https://www.max.com/"
  },
  {
    "id": "ramy",
    "title": "Ramy",
    "year": 2019,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Comedy",
      "Family"
    ],
    "runtime": 31,
    "rating": 5.1,
    "synopsis": "Ramy Hassan is a first-generation Egyptian-American who is on a spiritual journey in his politically divided New Jersey neighborhood. He becomes caught between a Muslim community that thinks",
    "popularity": 70,
    "accent": "#4f8fd3",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/445/1113772.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "she-hulk-attorney-at-law",
    "title": "She-Hulk: Attorney at Law",
    "year": 2022,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Comedy",
      "Science-Fiction"
    ],
    "runtime": 33,
    "rating": 6.3,
    "synopsis": "She-Hulk follows Jennifer, a lawyer who specializes in superhuman-oriented legal cases. She-Hulk will welcome a host of Marvel characters to the series, including the Hulk, played by Mark Ru",
    "popularity": 70,
    "accent": "#1f8a70",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/486/1215646.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "the-acolyte",
    "title": "The Acolyte",
    "year": 2024,
    "platform": "disney",
    "mediaType": "tv",
    "genres": [
      "Science-Fiction",
      "Thriller",
      "Mystery"
    ],
    "runtime": 40,
    "rating": 5.1,
    "synopsis": "The Acolyte takes viewers into a galaxy of shadowy secrets and emerging dark-side powers in the final days of the High Republic era.",
    "popularity": 70,
    "accent": "#d6653d",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/586/1465997.jpg",
    "watchUrl": "https://www.disneyplus.com/"
  },
  {
    "id": "the-power",
    "title": "The Power",
    "year": 2023,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Science-Fiction",
      "Thriller"
    ],
    "runtime": 58,
    "rating": 5.6,
    "synopsis": "Suddenly, and without warning, all teenage girls in the world develop the power to electrocute people at will. It's hereditary, it's inbuilt, and it can't be taken away from them. Over our f",
    "popularity": 70,
    "accent": "#7065a8",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/454/1136466.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "the-summer-i-turned-pretty",
    "title": "The Summer I Turned Pretty",
    "year": 2022,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Drama",
      "Romance"
    ],
    "runtime": 55,
    "rating": 6,
    "synopsis": "Belly Conklin is about to turn 16, and she's headed to her favorite place in the world, Cousins Beach, to spend the summer with her family and the Fishers. Belly's grown up a lot over the pa",
    "popularity": 70,
    "accent": "#415269",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/576/1440848.jpg",
    "watchUrl": "https://www.primevideo.com/"
  },
  {
    "id": "them",
    "title": "Them",
    "year": 2021,
    "platform": "prime",
    "mediaType": "tv",
    "genres": [
      "Horror"
    ],
    "runtime": 41,
    "rating": 6.6,
    "synopsis": "Horror anthology series. The first season titled \"Them: Covenant\" is set in 1953 and centers around Henry and Lucky Emory, who decide to move their family from North Carolina to an all-white",
    "popularity": 70,
    "accent": "#df4c42",
    "posterUrl": "https://static.tvmaze.com/uploads/images/original_untouched/510/1277188.jpg",
    "watchUrl": "https://www.primevideo.com/"
  }
];

export function durationBucket(runtime: number): DurationBucket {
  if (runtime < 30) return "quick";
  if (runtime <= 60) return "standard";
  if (runtime <= 120) return "feature";
  return "epic";
}

export function getShow(id: string, shows: Show[] = catalog): Show | undefined {
  return shows.find((show) => show.id === id);
}

export function upsertShows(existing: Show[], incoming: Show[]): Show[] {
  const map = new Map(existing.map((show) => [show.id, show]));
  for (const show of incoming) map.set(show.id, show);
  return [...map.values()].sort((a, b) => b.popularity - a.popularity || a.title.localeCompare(b.title));
}
