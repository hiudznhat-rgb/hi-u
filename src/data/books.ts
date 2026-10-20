export interface Book {
  id: string;
  title: string;
  originalTitle?: string;
  author: string;
  translator?: string;
  category: 'literature' | 'philosophy' | 'science' | 'art' | 'psychology';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  coverImage: string;
  format: 'Bìa cứng gáy vải' | 'Bìa mềm cao cấp' | 'Bản đặc biệt mạ kim';
  rating: number;
  reviewCount: number;
  pages: number;
  publishYear: number;
  publisher: string;
  isbn: string;
  inStock: boolean;
  featured?: boolean;
  badge?: string;
  description: string;
  authorBio: string;
  sampleExcerpt: {
    chapter: string;
    text: string[];
  };
  tableOfContents: string[];
  reviews: {
    id: string;
    userName: string;
    rating: number;
    date: string;
    comment: string;
  }[];
}

export const CATEGORIES = [
  { id: 'all', label: 'Tất cả tuyển tập' },
  { id: 'literature', label: 'Văn học & Kinh điển' },
  { id: 'philosophy', label: 'Triết học & Tư tưởng' },
  { id: 'science', label: 'Khoa học & Vũ trụ' },
  { id: 'art', label: 'Nghệ thuật & Thiết kế' },
  { id: 'psychology', label: 'Tâm lý & Lối sống' },
] as const;

export const BOOKS_DATA: Book[] = [
  {
    id: 'thb-01',
    title: 'Những Giờ Tĩnh Lặng',
    originalTitle: 'The Quiet Hours',
    author: 'Eleanor Vance',
    translator: 'Nguyễn Bích Lan',
    category: 'literature',
    categoryLabel: 'Văn học & Kinh điển',
    price: 245000,
    originalPrice: 290000,
    coverImage: '/src/assets/images/book_cover_literature_1792026356172.jpg',
    format: 'Bìa cứng gáy vải',
    rating: 4.9,
    reviewCount: 148,
    pages: 384,
    publishYear: 2024,
    publisher: 'NXB Hội Nhà Văn & Trung Hiếu Books',
    isbn: '978-604-982-102-4',
    inStock: true,
    featured: true,
    badge: 'Ấn bản sưu tầm',
    description: 'Một áng văn tĩnh tại và sâu lắng về sự chữa lành tâm hồn giữa những biến thiên của thời đại. Tác phẩm đưa người đọc qua bốn mùa của một thị trấn ven biển Bắc Âu, nơi mỗi trang sách tựa như một tách trà thơm bên khung cửa sổ chiều mưa.',
    authorBio: 'Eleanor Vance (sinh năm 1974) là nhà văn người Na Uy gốc Anh, từng nhận giải thưởng Văn học Bắc Âu danh giá năm 2019.',
    sampleExcerpt: {
      chapter: 'Chương 1: Sương sớm trên đồi cây dương xỉ',
      text: [
        'Khi sương mai vẫn còn đọng tròn trên những phiến lá dương xỉ ven hiên nhà, tôi đã quen nghe tiếng bồ câu vỗ cánh từ gác chuông cổ xa xa. Có một sự thanh vắng kỳ lạ chỉ thuộc về khoảnh khắc nửa giờ trước khi mặt trời nhô lên khỏi rặng thông già.',
        'Trong căn phòng thơm mùi giấy cũ và sáp ong, cuốn sổ tay bìa bọc vải thô nằm chờ đợi. Cuộc sống bên ngoài có thể vội vã với những guồng quay bất tận, nhưng ở đây, từng phút trôi qua đều có trọng lượng riêng của nó.',
        'Người ta thường nhầm lẫn giữa sự cô đơn và tĩnh lặng. Tĩnh lặng không phải là khoảng trống vắng bóng con người, mà là lúc tâm trí đủ rộng lớn để lắng nghe được tiếng thở khẽ của chính mình.'
      ]
    },
    tableOfContents: [
      'Chương 1: Sương sớm trên đồi cây dương xỉ',
      'Chương 2: Tiếng chim di trú và chiếc đồng hồ cát',
      'Chương 3: Bức thư gửi từ bờ biển phương Bắc',
      'Chương 4: Nghệ thuật của sự dừng lại',
      'Chương 5: Hoàng hôn màu tro trên vịnh hẹp',
      'Chương 6: Những vì sao trên mái ngói rêu'
    ],
    reviews: [
      {
        id: 'rev-1',
        userName: 'Trần Minh An',
        rating: 5,
        date: '12/10/2026',
        comment: 'Bản in tuyệt đẹp, chất giấy xốp ngà mắt đọc rất dễ chịu. Đóng gói của Trung Hiếu Books cực kỳ cẩn thận, hộp cứng kèm bookmark vải rất sang.'
      },
      {
        id: 'rev-2',
        userName: 'Lê Hoàng Yến',
        rating: 5,
        date: '08/10/2026',
        comment: 'Dịch thuật mượt mà và chau chuốt từ ngữ. Giao hàng nhanh và sách được bọc màng co bảo vệ cẩn thận.'
      }
    ]
  },
  {
    id: 'thb-02',
    title: 'Tâm Trí Cân Bằng: Triết Học Cho Hiện Tại',
    originalTitle: 'Mind in Balance',
    author: 'Julian Wright',
    translator: 'Vũ Đức Triêm',
    category: 'philosophy',
    categoryLabel: 'Triết học & Tư tưởng',
    price: 215000,
    originalPrice: 250000,
    coverImage: '/src/assets/images/book_cover_philosophy_1792026358143.jpg',
    format: 'Bìa mềm cao cấp',
    rating: 4.8,
    reviewCount: 96,
    pages: 312,
    publishYear: 2025,
    publisher: 'NXB Thế Giới & Trung Hiếu Books',
    isbn: '978-604-77-3912-8',
    inStock: true,
    featured: true,
    badge: 'Khuyên đọc',
    description: 'Sự hòa quyện giữa triết học Khắc Kỷ La Mã cổ đại và tinh thần Chánh niệm phương Đông. Julian Wright chỉ ra cách tái thiết lập trạng thái an định nội tâm trước áp lực thông tin và nhịp sống đô thị hiện đại.',
    authorBio: 'Julian Wright là học giả triết học đương đại tại Đại học Edinburgh, chuyên nghiên cứu về thực hành đạo đức học ứng dụng.',
    sampleExcerpt: {
      chapter: 'Chương 1: Trục xoay của sự chú ý',
      text: [
        'Chúng ta không thể kiểm soát các sự kiện bên ngoài tác động lên cuộc đời mình, nhưng hoàn toàn làm chủ cách ta gán ý nghĩa cho chúng.',
        'Mỗi ngày thức dậy, tâm trí bạn giống như một căn phòng đón nhận hàng ngàn tia sáng. Bạn có quyền chọn mở cửa sổ nào và khép lại cửa sổ nào.',
        'Cân bằng không phải là đứng yên bất động như một tảng đá giữa dòng thác, mà là khả năng điều chỉnh nhịp nhàng của người chèo thuyền trên mặt nước cuộn sóng.'
      ]
    },
    tableOfContents: [
      'Chương 1: Trục xoay của sự chú ý',
      'Chương 2: Nhận thức phân đôi của trường phái Khắc Kỷ',
      'Chương 3: Khoảng lặng giữa kích thích và phản hồi',
      'Chương 4: Sự tĩnh tại trong cơn bão dữ liệu',
      'Chương 5: Sống trọn vẹn với hiện tại giản dị'
    ],
    reviews: [
      {
        id: 'rev-3',
        userName: 'Nguyễn Tấn Đạt',
        rating: 5,
        date: '05/10/2026',
        comment: 'Cuốn sách thay đổi góc nhìn của mình về áp lực công việc. Khuyên ai hay bị overthinking nên đọc.'
      }
    ]
  },
  {
    id: 'thb-03',
    title: 'Vũ Trụ & Tri Thức Nhân Loại',
    originalTitle: 'Cosmos & Human Knowledge',
    author: 'TS. Evelyn Reed',
    translator: 'Phạm Văn Thiều & CTV',
    category: 'science',
    categoryLabel: 'Khoa học & Vũ trụ',
    price: 360000,
    originalPrice: 420000,
    coverImage: '/src/assets/images/book_cover_science_1792026356731.jpg',
    format: 'Bản đặc biệt mạ kim',
    rating: 5.0,
    reviewCount: 210,
    pages: 520,
    publishYear: 2025,
    publisher: 'NXB Khoa Học & Kỹ Thuật & Trung Hiếu Books',
    isbn: '978-604-67-1189-0',
    inStock: true,
    featured: true,
    badge: 'Bản đặc biệt',
    description: 'Bản trường ca kỳ vĩ về hành trình 13,8 tỷ năm từ vụ nổ Big Bang cho đến sự trỗi dậy của ý thức nhân loại. Cuốn sách tổng hợp các khám phá thiên văn mới nhất từ kính viễn vọng không gian James Webb với minh họa đồ họa sắc nét.',
    authorBio: 'TS. Evelyn Reed là nhà vật lý thiên văn tại Viện Công nghệ California (Caltech), tác giả của nhiều công trình nghiên cứu về hố đen và vật chất tối.',
    sampleExcerpt: {
      chapter: 'Chương 1: Hạt bụi giữa đại dương vô tận',
      text: [
        'Nhìn lên bầu trời đêm quang đãng, từng đốm sáng mong manh lấp lánh kia thực chất là thông điệp của hàng triệu năm trước vừa kịp vượt qua đại dương chân không để chạm vào võng mạc của bạn.',
        'Nguyên tử sắt trong hồng cầu của bạn, canxi trong xương của bạn, và carbon tạo nên mọi tế bào sống trên Trái Đất đều được rèn đúc trong tâm của những ngôi sao khổng lồ đã nổ tung từ thuở sơ khai.',
        'Chúng ta không chỉ sống trong vũ trụ; vũ trụ đang sống trong mỗi chúng ta.'
      ]
    },
    tableOfContents: [
      'Chương 1: Hạt bụi giữa đại dương vô tận',
      'Chương 2: Nhịp đập đầu tiên của thời gian và không gian',
      'Chương 3: Lò phản ứng hạt nhân của các vì sao',
      'Chương 4: Sự ra đời của hệ Mặt Trời và mái nhà xanh',
      'Chương 5: Bí ẩn vật chất tối và năng lượng tối',
      'Chương 6: Tương lai của nền văn minh trước vô tận'
    ],
    reviews: [
      {
        id: 'rev-4',
        userName: 'Đặng Tuấn Kiệt',
        rating: 5,
        date: '14/10/2026',
        comment: 'Bìa cứng mạ vàng lấp lánh cực kỳ sang trọng! Nội dung khoa học mà viết văn phong rất giàu chất thơ.'
      }
    ]
  },
  {
    id: 'thb-04',
    title: 'Nguyên Lý Thẩm Mỹ Kiến Trúc Phương Đông',
    originalTitle: 'Principles of Eastern Architectural Aesthetics',
    author: 'Kengo Matsuzaki & Nguyễn Việt Hà',
    category: 'art',
    categoryLabel: 'Nghệ thuật & Thiết kế',
    price: 320000,
    originalPrice: 380000,
    coverImage: '/src/assets/images/hero_bookstore_curated_1792026356672.jpg',
    format: 'Bìa cứng gáy vải',
    rating: 4.8,
    reviewCount: 74,
    pages: 410,
    publishYear: 2024,
    publisher: 'NXB Mỹ Thuật & Trung Hiếu Books',
    isbn: '978-604-78-0192-3',
    inStock: true,
    featured: false,
    badge: 'Tác phẩm tuyển lựa',
    description: 'Nghiên cứu sâu sắc về sự kết nối hài hòa giữa con người, ánh sáng tự nhiên và chất liệu gỗ, đá trong kiến trúc truyền thống Đông Á. Tác phẩm truyền cảm hứng thiết kế không gian sống dung dị mà tinh tế.',
    authorBio: 'Kengo Matsuzaki là nhà nghiên cứu lịch sử kiến trúc tại Tokyo, cùng sự cộng tác của KTS. Nguyễn Việt Hà.',
    sampleExcerpt: {
      chapter: 'Chương 1: Ánh sáng nghiêng qua hiên gỗ',
      text: [
        'Vẻ đẹp kiến trúc phương Đông không phô bày bằng những hình khối đồ sộ ngạo nghễ, mà ẩn mình trong những khoảng hiên sâu nơi ánh sáng và bóng tối giao hòa.',
        'Vật liệu tự nhiên như gỗ tuyết tùng, đá thô và giấy washi không chống lại thời gian; chúng chào đón thời gian, biến mỗi vết ố và sắc sạm thành dấu ấn của sinh mệnh.',
        'Một ngôi nhà đẹp là ngôi nhà biết nhường chỗ cho gió trời và sự yên ả bước vào.'
      ]
    },
    tableOfContents: [
      'Chương 1: Ánh sáng nghiêng qua hiên gỗ',
      'Chương 2: Triết lý về khoảng trống (Ma)',
      'Chương 3: Sự tiếp biến giữa sân trong và thiên nhiên',
      'Chương 4: Kỹ thuật ghép mộng mộc không đinh',
      'Chương 5: Ứng dụng trong không gian sống hiện đại'
    ],
    reviews: [
      {
        id: 'rev-5',
        userName: 'KTS. Lê Quang Huy',
        rating: 5,
        date: '02/10/2026',
        comment: 'Cuốn sách gối đầu giường cho những ai yêu kiến trúc mộc mạc và triết lý Wabi-Sabi.'
      }
    ]
  },
  {
    id: 'thb-05',
    title: 'Những Ngọn Đèn Trong Sương',
    originalTitle: 'Lanterns in the Mist',
    author: 'Vũ Trọng Phụng & Tuyển Tập Văn Bút',
    category: 'literature',
    categoryLabel: 'Văn học & Kinh điển',
    price: 185000,
    originalPrice: 220000,
    coverImage: '/src/assets/images/book_cover_literature_1792026356172.jpg',
    format: 'Bìa mềm cao cấp',
    rating: 4.9,
    reviewCount: 162,
    pages: 290,
    publishYear: 2024,
    publisher: 'NXB Văn Học & Trung Hiếu Books',
    isbn: '978-604-95-4421-3',
    inStock: true,
    featured: false,
    description: 'Tuyển tập những tác phẩm văn học hiện thực xuất sắc được biên soạn lại với thủ pháp in ấn hiện đại và phần chú giải từ vựng cổ chi tiết dành cho thế hệ độc giả trẻ.',
    authorBio: 'Tuyển tập đặc biệt do Ban Biên tập Trung Hiếu Books thực hiện với sự cố vấn của các nhà nghiên cứu văn học uy tín.',
    sampleExcerpt: {
      chapter: 'Lời tựa: Tiếng vọng từ một thời tao loạn',
      text: [
        'Văn chương chân chính là thứ chữ nghĩa cất lên từ gan ruột của thời cuộc, ghi lại nhịp đập thổn thức của nhân dân giữa bao tao loạn.',
        'Mỗi trang viết như một ngọn đèn le lói thắp lên giữa màn sương mịt mùng, dẫn lối cho những ai đi tìm chân lý và lẽ phải.'
      ]
    },
    tableOfContents: [
      'Lời tựa: Tiếng vọng từ một thời tao loạn',
      'Phần 1: Những kiếp người bên lề xã hội',
      'Phần 2: Nụ cười chua chát của hiện thực',
      'Phần 3: Ánh sáng của lòng nhân ái'
    ],
    reviews: [
      {
        id: 'rev-6',
        userName: 'Bùi Lan Hương',
        rating: 5,
        date: '10/10/2026',
        comment: 'Bìa sách thiết kế trang nhã, chất lượng biên tập rất chỉn chu.'
      }
    ]
  },
  {
    id: 'thb-06',
    title: 'Tâm Lý Học Về Tiền & Lòng An Yên',
    originalTitle: 'The Psychology of Wealth and Peace',
    author: 'Morgan Thorne',
    translator: 'Hà Linh Chi',
    category: 'psychology',
    categoryLabel: 'Tâm lý & Lối sống',
    price: 195000,
    originalPrice: 235000,
    coverImage: '/src/assets/images/book_cover_philosophy_1792026358143.jpg',
    format: 'Bìa mềm cao cấp',
    rating: 4.7,
    reviewCount: 118,
    pages: 336,
    publishYear: 2025,
    publisher: 'NXB Công Thương & Trung Hiếu Books',
    isbn: '978-604-89-9011-5',
    inStock: true,
    featured: false,
    description: 'Khám phá cách cảm xúc, nỗi sợ hãi và lòng tham chi phối các quyết định tài chính của con người. Tác giả chỉ ra rằng sự giàu có thực sự không đo bằng số dư tài khoản mà là quyền tự do sở hữu thời gian của chính mình.',
    authorBio: 'Morgan Thorne là cây bút bình luận tài chính kỳ cựu của Financial Review.',
    sampleExcerpt: {
      chapter: 'Chương 1: Sự giàu có vô hình',
      text: [
        'Tiêu tiền để cho người khác thấy bạn có bao nhiêu tiền là cách nhanh nhất để có ít tiền hơn.',
        'Tự do tài chính đích thực là khả năng thức dậy vào mỗi buổi sáng và nói: Hôm nay tôi có thể làm bất cứ điều gì mình muốn với bất kỳ ai tôi thích.'
      ]
    },
    tableOfContents: [
      'Chương 1: Sự giàu có vô hình',
      'Chương 2: Cạm bẫy của sự so sánh',
      'Chương 3: Sức mạnh của sự tích lũy âm thầm',
      'Chương 4: Quyền tự quyết về thời gian'
    ],
    reviews: [
      {
        id: 'rev-7',
        userName: 'Phạm Đức Anh',
        rating: 5,
        date: '09/10/2026',
        comment: 'Đọc rất thấm thía, giúp mình bớt chi tiêu bốc đồng và quý trọng thời gian hơn.'
      }
    ]
  },
  {
    id: 'thb-07',
    title: 'Đối Thoại Với Thời Gian: Triết Học Khắc Kỷ Cổ Đại',
    originalTitle: 'Letters on Serenity and Time',
    author: 'Seneca & Marcus Aurelius',
    translator: 'Nguyễn Văn Vĩnh dịch chú',
    category: 'philosophy',
    categoryLabel: 'Triết học & Tư tưởng',
    price: 275000,
    originalPrice: 310000,
    coverImage: '/src/assets/images/book_cover_philosophy_1792026358143.jpg',
    format: 'Bìa cứng gáy vải',
    rating: 4.9,
    reviewCount: 88,
    pages: 440,
    publishYear: 2024,
    publisher: 'NXB Tri Thức & Trung Hiếu Books',
    isbn: '978-604-99-8733-1',
    inStock: true,
    featured: true,
    badge: 'Kinh điển muôn đời',
    description: 'Những bức thư triết học vượt thời gian về nghệ thuật làm chủ tâm trí trước nghịch cảnh, thấu hiểu giá trị của từng khoảnh khắc và giữ vững nhân cách độc lập.',
    authorBio: 'Các danh triết cổ đại La Mã, những người tiên phong đặt nền móng cho chủ nghĩa Khắc Kỷ thực hành.',
    sampleExcerpt: {
      chapter: 'Bức thư 1: Về việc làm chủ thời gian',
      text: [
        'Hãy giữ lấy từng giờ phút của bạn, bạn của tôi ơi. Hãy nắm giữ ngày hôm nay, và bạn sẽ bớt phụ thuộc vào ngày mai.',
        'Trong khi chúng ta trì hoãn, cuộc đời cứ thế trôi đi. Mọi thứ khác đều không thuộc về ta, chỉ duy có thời gian là của riêng ta.'
      ]
    },
    tableOfContents: [
      'Bức thư 1: Về việc làm chủ thời gian',
      'Bức thư 2: Về việc đọc sách và sự tĩnh tâm',
      'Bức thư 3: Về tình bạn chân chính và sự chân thành',
      'Bức thư 4: Đối diện với âu lo bằng sự thanh thản'
    ],
    reviews: [
      {
        id: 'rev-8',
        userName: 'Hoàng Minh Quân',
        rating: 5,
        date: '11/10/2026',
        comment: 'Bìa vải gáy chỉ may tay rất bền, bản dịch của Trung Hiếu Books rất trang nhã và giữ đúng phong vị triết học cổ điển.'
      }
    ]
  },
  {
    id: 'thb-08',
    title: 'Hạt Giống Của Ý Thức & Trí Tuệ Nhân Tạo',
    originalTitle: 'Seeds of Consciousness',
    author: 'GS. Arthur Vance & TS. Claire Moreau',
    translator: 'Trần Đình Thắng',
    category: 'science',
    categoryLabel: 'Khoa học & Vũ trụ',
    price: 295000,
    originalPrice: 340000,
    coverImage: '/src/assets/images/book_cover_science_1792026356731.jpg',
    format: 'Bìa mềm cao cấp',
    rating: 4.8,
    reviewCount: 65,
    pages: 368,
    publishYear: 2025,
    publisher: 'NXB Thông Tin & Truyền Thông & Trung Hiếu Books',
    isbn: '978-604-88-7654-2',
    inStock: true,
    featured: false,
    description: 'Cuộc đối thoại giữa thần kinh học và công nghệ tính toán hiện đại: Điều gì tạo nên trải nghiệm chủ quan của con người và ranh giới giữa cỗ máy thông minh với linh hồn sinh học.',
    authorBio: 'Các chuyên gia nghiên cứu hàng đầu về khoa học nhận thức và điện toán lượng tử.',
    sampleExcerpt: {
      chapter: 'Chương 1: Ánh lửa trong bóng tối sinh học',
      text: [
        'Bộ não người với 86 tỷ nơ-ron liên kết phức tạp hơn bất kỳ mạng lưới nhân tạo nào từng được tạo ra.',
        'Nhưng điều kỳ diệu nhất không nằm ở tốc độ xử lý dữ liệu, mà ở khả năng cảm nhận vẻ đẹp của một hoàng hôn hay một giai điệu sâu lắng.'
      ]
    },
    tableOfContents: [
      'Chương 1: Ánh lửa trong bóng tối sinh học',
      'Chương 2: Mạng nơ-ron và sự tái hiện ký ức',
      'Chương 3: Vấn đề nan giải của ý thức (The Hard Problem)',
      'Chương 4: Tương lai của loài người trong kỷ nguyên máy móc'
    ],
    reviews: [
      {
        id: 'rev-9',
        userName: 'Lê Thu Trang',
        rating: 5,
        date: '13/10/2026',
        comment: 'Cuốn sách khoa học mang tính khai sáng, viết rất cuốn hút và cập nhật các nghiên cứu mới nhất.'
      }
    ]
  }
];
