export type AssignmentStage = {
  title: string;
  description: string;
  images?: { src: string; caption: string }[];
};

export type AssignmentData = {
  number: number;
  title: string;
  label: string;
  objective: string;
  stages: AssignmentStage[];
  conclusion: string;
  file: string;
  fileType: string;
  extraFiles?: { file: string; label: string }[];
};

export const assignmentData: AssignmentData[] = [
  {
    number: 1,
    title: 'Thao tác cơ bản với tệp tin và thư mục',
    label: 'Nền tảng số',
    objective: 'Sắp xếp dữ liệu học tập theo một hệ thống dễ tìm, dễ cập nhật và hạn chế nhầm phiên bản. Bài làm cũng là bước chuẩn bị ban đầu để xây dựng portfolio cá nhân bằng HTML.',
    stages: [
      {
        title: 'Khảo sát và phân loại dữ liệu',
        description: 'Mình rà soát các tệp đang có, chia chúng theo môn học và loại nội dung, sau đó xác định những tài liệu cần giữ, đổi tên hoặc chuyển sang thư mục khác.',

      },
      {
        title: 'Chuẩn hóa cách lưu trữ',
        description: 'Các thao tác tạo thư mục, đổi tên, sao chép, di chuyển và xóa khỏi thùng rác được thực hành theo cùng một quy tắc. Cách đặt tên ngắn, có chủ đề và phiên bản giúp mình tìm lại tài liệu nhanh hơn.',
      },
      {
        title: 'Dựng trang portfolio đầu tiên',
        description: 'Từ dữ liệu đã sắp xếp, mình tạo một trang HTML để giới thiệu thông tin cá nhân và nội dung học tập. Đây là bản nền trước khi portfolio được phát triển thành website hiện tại.',
      },
    ],
    conclusion: 'Bài tập giúp mình hiểu rằng quản lý tệp không phải việc phụ. Một cấu trúc thư mục rõ ràng làm giảm thời gian tìm kiếm, tránh ghi đè nhầm và giúp các bài sau được tổng hợp vào portfolio thuận lợi hơn.',
    file: '/assets/files/bai1.pdf',
    fileType: 'PDF',
  },
  {
    number: 2,
    title: 'Tìm kiếm và đánh giá thông tin học thuật',
    label: 'Nghiên cứu',
    objective: 'Tìm nguồn đáng tin cậy cho chủ đề ứng dụng AI trong dạy và học ngoại ngữ tại Việt Nam, đồng thời tập đánh giá tài liệu thay vì chỉ chọn kết quả xuất hiện đầu tiên.',
    stages: [
      {
        title: 'Xác định phạm vi tìm kiếm',
        description: 'Mình giới hạn tài liệu trong giai đoạn 2023–2025 và xây dựng nhóm từ khóa bằng cả tiếng Việt lẫn tiếng Anh. Google Scholar, DOAJ và các tạp chí giáo dục là những điểm tìm kiếm chính.',
      },
      {
        title: 'Sàng lọc và đối chiếu nguồn',
        description: 'Tám công trình được xem xét theo tác giả, nơi xuất bản, phương pháp, mức độ liên quan và khả năng kiểm chứng. Các nghiên cứu có DOI, dữ liệu thực nghiệm hoặc quy trình tổng quan rõ ràng được ưu tiên.',
        images: [{ src: '/assets/thumb2.png', caption: 'Bảng tổng hợp tác giả, loại nguồn và mức xếp hạng.' }],
      },
      {
        title: 'Tổng hợp kết quả',
        description: 'Những nguồn quốc tế cung cấp khung nghiên cứu chung, còn các công trình tại Việt Nam cho thấy cách giảng viên và sinh viên đang dùng AI trong thực tế. Mình giữ lại cả lợi ích lẫn cảnh báo về độ chính xác và sự phụ thuộc.',
      },
    ],
    conclusion: 'Sau bài này, mình không còn xem số lượng kết quả tìm được là thước đo chính. Điều quan trọng hơn là biết nguồn do ai viết, được công bố ở đâu, dùng phương pháp nào và có thực sự trả lời câu hỏi nghiên cứu hay không.',
    file: '/assets/files/bai2.pdf',
    fileType: 'PDF',
  },
  {
    number: 3,
    title: 'Viết prompt hiệu quả cho tác vụ học tập',
    label: 'Prompt engineering',
    objective: 'Kiểm tra xem cách viết prompt ảnh hưởng thế nào đến đầu ra AI trong ba tình huống học ngoại ngữ: giải thích ngữ pháp, chấm IELTS Writing và tạo bài tập từ vựng.',
    stages: [
      {
        title: 'Tạo prompt cơ bản',
        description: 'Mỗi tác vụ bắt đầu bằng một yêu cầu ngắn. Kết quả thường đúng ở mức khái quát nhưng thiếu đối tượng người học, tiêu chí đánh giá và định dạng cần thiết.',

      },
      {
        title: 'Bổ sung ngữ cảnh và tiêu chí',
        description: 'Mình thêm trình độ B1 hoặc IELTS, số lượng ví dụ, cấu trúc đầu ra và thang đánh giá. Chỉ với những ràng buộc cụ thể này, câu trả lời đã dễ dùng hơn rõ rệt.',
      },
      {
        title: 'Hoàn thiện prompt nâng cao',
        description: 'Ở phiên bản cuối, AI được giao vai trò giáo viên hoặc giám khảo, kèm nhiệm vụ và giới hạn rõ ràng. Kết quả có thể dùng để học ngay vì đã có ví dụ, giải thích lỗi và phản hồi theo tiêu chí.',
      },
    ],
    conclusion: 'Mình học được rằng prompt tốt không cần dài một cách máy móc. Nó cần nói rõ AI đang hỗ trợ ai, làm việc gì, theo tiêu chuẩn nào và trả kết quả ra sao. Việc thử lại và chỉnh prompt cũng quan trọng như lần viết đầu tiên.',
    file: '/assets/files/bai3.pdf',
    fileType: 'PDF',
  },
  {
    number: 4,
    title: 'Sử dụng công cụ hợp tác trực tuyến',
    label: 'Làm việc nhóm',
    objective: 'Tổ chức dự án nhóm về AI trong ngôn ngữ và giáo dục trong hai tuần, bảo đảm mỗi thành viên biết việc cần làm, tài liệu được lưu đúng chỗ và tiến độ có thể theo dõi.',
    stages: [
      {
        title: 'Thiết lập không gian làm việc',
        description: 'Nhóm dùng Trello cho tiến độ, Google Docs để cùng soạn nội dung, Drive để lưu tệp, Zalo cho trao đổi nhanh và Google Meet cho các buổi thống nhất công việc.',
        images: [
          { src: '/assets/evidence/bai4-1-Image25.jpg', caption: 'Bảng Trello chia nhiệm vụ theo trạng thái.' },
          { src: '/assets/evidence/bai4-2-Image28.png', caption: 'Không gian tài liệu chung của nhóm.' },
        ],
      },
      {
        title: 'Phân công và phối hợp',
        description: 'Mình tham gia xây dựng outline, theo dõi tiến độ và rà soát các phần nội dung. Mỗi đầu việc có người phụ trách và hạn hoàn thành; thay đổi quan trọng được cập nhật trên cả Trello lẫn nhóm chat.',
        images: [
          { src: '/assets/evidence/bai4-3-Image31.jpg', caption: 'Trao đổi và cập nhật tiến độ giữa các thành viên.' },
          { src: '/assets/evidence/bai4-4-Image34.png', caption: 'Quá trình cùng chỉnh sửa nội dung trực tuyến.' },
        ],
      },
      {
        title: 'Quản lý tệp và xử lý vướng mắc',
        description: 'Tài liệu được chia thành Research Materials, Report Draft, Slides, Video Materials và Final Submission. Khi xảy ra xung đột chỉnh sửa hoặc khó xếp lịch, nhóm chuyển sang góp ý bằng bình luận và chốt lịch sớm hơn.',
        images: [{ src: '/assets/evidence/bai4-9-Image54.png', caption: 'Minh chứng tổ chức và hoàn thiện tài nguyên dự án.' }],
      },
    ],
    conclusion: 'Công cụ chỉ phát huy tác dụng khi cả nhóm dùng chung một quy ước. Qua dự án, mình tiến bộ rõ nhất ở việc theo dõi đầu việc, phản hồi đúng chỗ và giữ cho phiên bản cuối không bị lẫn với bản nháp.',
    file: '/assets/files/bai4.pdf',
    fileType: 'PDF',
  },
  {
    number: 5,
    title: 'Dùng AI tạo sinh để sáng tạo nội dung số',
    label: 'Sáng tạo với AI',
    objective: 'Thiết kế poster về kỹ năng quản lý thời gian cho sinh viên, kết hợp AI tạo văn bản, AI tạo ảnh và công cụ thiết kế nhưng vẫn giữ quyền quyết định nội dung ở người làm.',
    stages: [
      {
        title: 'Phát triển nội dung với Claude',
        description: 'Claude tạo dàn ý gồm xác định ưu tiên, lập kế hoạch tuần và giảm xao nhãng. Mình viết lại tiêu đề, thêm lịch học điện tử và phương pháp Pomodoro để nội dung gần với sinh viên hơn.',
        images: [
          { src: '/assets/evidence/bai5-1-Image34.png', caption: 'Prompt xây dựng nội dung poster trên Claude.' },
          { src: '/assets/evidence/bai5-2-Image35.png', caption: 'Phương án nội dung ban đầu do AI đề xuất.' },
        ],
      },
      {
        title: 'Tạo và chọn hình minh họa',
        description: 'DALL·E được dùng để tạo hình sinh viên, lịch và đồng hồ theo phong cách phẳng. Mình loại bớt chi tiết rối, chỉnh màu và kết hợp icon để các hình có cùng một ngôn ngữ thị giác.',
        images: [
          { src: '/assets/evidence/bai5-3-Image38.jpg', caption: 'Một phương án minh họa được tạo từ prompt.' },
          { src: '/assets/evidence/bai5-4-Image41.jpg', caption: 'Quá trình chọn lọc và điều chỉnh hình ảnh.' },
        ],
      },
      {
        title: 'Hoàn thiện poster trên Canva',
        description: 'Sau khi thử nhiều bảng màu và bố cục, mình chọn cách chia ba phần, tăng khoảng trắng và kích thước biểu tượng. AI hỗ trợ thử nhanh phương án; lựa chọn cuối cùng vẫn dựa trên khả năng đọc và sự cân đối.',
        images: [
          { src: '/assets/evidence/bai5-6-Image51.jpg', caption: 'Giai đoạn hoàn thiện bố cục trên Canva.' },
          { src: '/assets/5.1.png', caption: 'Sản phẩm poster sau cùng.' },
        ],
      },
    ],
    conclusion: 'AI giúp mình thoát khỏi trang giấy trắng và thử được nhiều hướng trong thời gian ngắn. Dù vậy, phần tạo nên chất lượng của poster vẫn là khâu chọn lọc, sửa nội dung và bỏ những chi tiết không phục vụ người xem.',
    file: '/assets/files/bai5.pdf',
    fileType: 'PDF',
  },
  {
    number: 6,
    title: 'Sử dụng AI có trách nhiệm trong học tập',
    label: 'Đạo đức AI',
    objective: 'Xác định ranh giới giữa hỗ trợ hợp lý và gian lận học thuật, sau đó áp dụng vào một nhiệm vụ xây dựng dàn ý bài luận về ảnh hưởng của AI đối với việc học ngoại ngữ.',
    stages: [
      {
        title: 'Đọc chính sách và xác định nguyên tắc',
        description: 'Mình đối chiếu định hướng của ULIS–VNU với một số trường quốc tế. Điểm chung là AI có thể hỗ trợ tìm ý, lập dàn bài hoặc kiểm tra ngôn ngữ, nhưng người học phải chịu trách nhiệm về sản phẩm nộp.',
      },
      {
        title: 'Thử nghiệm trên nhiệm vụ thật',
        description: 'ChatGPT được yêu cầu xây dựng dàn ý cho bài luận 1.200 từ. Mình bổ sung ví dụ sát với sinh viên ngoại ngữ, mở rộng phần rủi ro phụ thuộc và kiểm chứng các nhận định bằng nguồn học thuật.',
        images: [
          { src: '/assets/evidence/bai6-1-Image34.png', caption: 'Đầu ra dàn ý do ChatGPT đề xuất.' },
          { src: '/assets/evidence/bai6-2-Image47.jpg', caption: 'Minh chứng quá trình đánh giá và hoàn thiện nội dung.' },
        ],
      },
      {
        title: 'Xây dựng cam kết cá nhân',
        description: 'Từ trải nghiệm trên, mình đặt ra sáu nguyên tắc: dùng AI để hỗ trợ tư duy, minh bạch mức độ sử dụng, kiểm chứng thông tin, không giao toàn bộ bài cho AI, bảo vệ dữ liệu và giữ tiếng nói cá nhân.',
        images: [{ src: '/assets/6.1.png', caption: 'Infographic tóm tắt nguyên tắc sử dụng AI có trách nhiệm.' }],
      },
    ],
    conclusion: 'Điều mình rút ra không phải là dùng AI càng ít càng tốt, mà là luôn biết phần nào do AI gợi ý và phần nào mình thực sự hiểu, kiểm tra, chỉnh sửa. Trích dẫn và minh bạch là một phần của năng lực học thuật.',
    file: '/assets/files/bai6.pdf',
    fileType: 'PDF',
    extraFiles: [
      { file: '/assets/files/bai6-1.pdf', label: 'Báo cáo chi tiết' },
    ],
  },
  {
    number: 7,
    title: 'Tạo học liệu ngoại ngữ cá nhân hóa bằng AI',
    label: 'AI trong học tập',
    objective: 'Dùng Gemini tạo một bộ học liệu luyện câu điều kiện cho người học IELTS 5.5–6.0, tập trung đồng thời vào Reading, Grammar, Speaking và Writing.',
    stages: [
      {
        title: 'Xác định hồ sơ người học',
        description: 'Mình chọn mục tiêu cải thiện Grammatical Range and Accuracy và giới hạn nội dung ở câu điều kiện loại 2 cùng mixed conditionals. Mỗi prompt đều nêu trình độ, kỹ năng và dạng đầu ra cần tạo.',

      },
      {
        title: 'Tạo bộ học liệu',
        description: 'Gemini lần lượt tạo bài đọc 220 từ, bài tập ngữ pháp, hoạt động Speaking Part 3 và đề Writing Task 2. Đáp án, giải thích và khoảng trống luyện tập được yêu cầu ngay từ prompt.',
      },
      {
        title: 'Thử nghiệm và điều chỉnh',
        description: 'Hai người học ở mức IELTS 5.5 và 6.5 dùng thử tài liệu. Phản hồi cho thấy bài tập dễ theo dõi nhưng một số câu còn dài, vì vậy prompt sau được thêm giới hạn từ vựng B1 và tối đa 18 từ mỗi câu.',
      },
    ],
    conclusion: 'Cá nhân hóa bằng AI hiệu quả khi mục tiêu đủ cụ thể và có vòng phản hồi thật. Mình cũng nhận ra học liệu tạo nhanh vẫn cần người dạy kiểm tra lỗi ngữ pháp, độ tự nhiên và mức khó trước khi sử dụng.',
    file: '/assets/files/bai7.pdf',
    fileType: 'PDF',
  },
];
