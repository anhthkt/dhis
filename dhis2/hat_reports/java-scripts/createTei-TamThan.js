
const _writeJsonFile = require('write-json-file');
const fs = require('fs');
const { get } = require("https");



let surnameArr = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Phan", "Vũ", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô", "Dương", "Lý", "Lâm", "Cao", "Đoàn", "Đàm"]
let lastNameArr = ["An Cơ", "An Khang", "Ân Lai", "An Nam", "An Nguyên", "An Ninh", "An Tâm", "Ân Thiện", "An Tường", "Anh Ðức", "Anh Dũng", "Anh Duy", "Anh Hoàng", "Anh Khải", "Anh Khoa", "Anh Khôi", "Anh Minh", "Anh Quân", "Anh Quốc", "Anh Sơn", "Anh Tài", "Anh Thái", "Anh Tú", "Anh Tuấn", "Anh Tùng", "Anh Việt", "Anh Vũ", "Bá Cường", "Bá Kỳ", "Bá Lộc", "Bá Long", "Bá Phước", "Bá Thành", "Bá Thiện", "Bá Thịnh", "Bá Thúc", "Bá Trúc", "Bá Tùng", "Bách Du", "Bách Nhân", "Bằng Sơn", "Bảo An", "Bảo Bảo", "Bảo Chấn", "Bảo Ðịnh", "Bảo Duy", "Bảo Giang", "Bảo Hiển", "Bảo Hoa", "Bảo Hoàng", "Bảo Huy", "Bảo Huynh", "Bảo Huỳnh", "Bảo Khánh", "Bảo Lâm", "Bảo Long", "Bảo Pháp", "Bảo Quốc", "Bảo Sơn", "Bảo Thạch", "Bảo Thái", "Bảo Tín", "Bảo Toàn", "Bích Nhã", "Bình An", "Bình Dân", "Bình Ðạt", "Bình Ðịnh", "Bình Dương", "Bình Hòa", "Bình Minh", "Bình Nguyên", "Bình Quân", "Bình Thuận", "Bình Yên", "Bửu Chưởng", "Bửu Diệp", "Bữu Toại", "Cảnh Tuấn", "Cao Kỳ", "Cao Minh", "Cao Nghiệp", "Cao Nguyên", "Cao Nhân", "Cao Phong", "Cao Sĩ", "Cao Sơn", "Cao Sỹ", "Cao Thọ", "Cao Tiến", "Cát Tường", "Cát Uy", "Chấn Hùng", "Chấn Hưng", "Chấn Phong", "Chánh Việt", "Chế Phương", "Chí Anh", "Chí Bảo", "Chí Công", "Chí Dũng", "Chí Giang", "Chí Hiếu", "Chí Khang", "Chí Khiêm", "Chí Kiên", "Chí Nam", "Chí Sơn", "Chí Thanh", "Chí Thành", "Chiến Thắng", "Chiêu Minh", "Chiêu Phong", "Chiêu Quân", "Chính Tâm", "Chính Thuận", "Chính Trực", "Chuẩn Khoa", "Chung Thủy", "Chung Tình", "Công Anh", "Công Án", "Công Ân", "Công Bằng", "Công Giang", "Công Hải", "Công Hào", "Công Hậu", "Công Hiếu", "Công Hoán", "Công Lập", "Công Lộc", "Công Luận", "Công Luật", "Công Lý", "Công Phụng", "Công Sinh", "Công Sơn", "Công Sửu", "Công Thành", "Công Tráng", "Công Tuấn", "Cường Dũng", "Cương Nghị", "Cương Quyết", "Cường Thịnh", "Ðắc Cường", "Ðắc Di", "Ðắc Lộ", "Ðắc Lực", "Ðắc Thái", "Ðắc Thành", "Ðắc Trọng", "Ðại Dương", "Ðại Hành", "Ðại Ngọc", "Ðại Thống", "Dân Hiệp", "Dân Khánh", "Ðan Quế", "Ðan Tâm", "Ðăng An", "Ðăng Ðạt", "Ðăng Khánh", "Ðăng Khoa", "Đăng Khương", "Ðăng Minh", "Đăng Quang", "Danh Nhân", "Danh Sơn", "Danh Thành", "Danh Văn", "Ðạt Dũng", "Ðạt Hòa", "Đình Bình", "Ðình Chiểu", "Ðình Chương", "Ðình Cường", "Ðình Diệu", "Ðình Ðôn", "Ðình Dương", "Ðình Hảo", "Ðình Hợp", "Đình Khải", "Ðình Kim", "Ðinh Lộc", "Ðình Lộc", "Ðình Luận", "Ðịnh Lực", "Ðình Nam", "Ðình Ngân", "Ðình Nguyên", "Ðình Nhân", "Ðình Phú", "Ðình Phúc", "Ðình Quảng", "Ðình Sang", "Ðịnh Siêu", "Ðình Thắng", "Ðình Thiện", "Ðình Toàn", "Ðình Trung", "Ðình Tuấn", "Ðoàn Tụ", "Ðồng Bằng", "Ðông Dương", "Ðông Hải", "Ðồng Khánh", "Ðông Nguyên", "Ðông Phong", "Ðông Phương", "Ðông Quân", "Ðông Sơn", "Ðức Ân", "Ðức Anh", "Ðức Bằng", "Ðức Bảo", "Ðức Bình", "Ðức Chính", "Ðức Duy", "Ðức Giang", "Ðức Hải", "Ðức Hạnh", "Đức Hòa", "Ðức Huy", "Ðức Khải", "Đức Khoa", "Ðức Khang", "Ðức Khiêm", "Ðức Kiên", "Ðức Long", "Ðức Mạnh", "Ðức Minh", "Ðức Nhân", "Ðức Phi", "Ðức Phong", "Ðức Phú", "Ðức Quang", "Ðức Quảng", "Ðức Quyền", "Ðức Siêu", "Ðức Sinh", "Ðức Tài", "Ðức Tâm", "Ðức Thắng", "Ðức Thành", "Ðức Thọ", "Ðức Toàn", "Ðức Toản", "Ðức Trí", "Ðức Trung", "Ðức Tuấn", "Ðức Tuệ", "Ðức Tường", "Dũng Trí", "Dũng Việt", "Dương Anh", "Dương Khánh", "Duy An", "Duy Bảo", "Duy Cẩn", "Duy Cường", "Duy Hải", "Duy Hiền", "Duy Hiếu", "Duy Hoàng", "Duy Hùng", "Duy Khang", "Duy Khánh", "Duy Khiêm", "Duy Kính", "Duy Luận", "Duy Mạnh", "Duy Minh", "Duy Ngôn", "Duy Nhượng", "Duy Quang", "Duy Tâm", "Duy Tân", "Duy Thạch", "Duy Thắng", "Duy Thanh", "Duy Thành", "Duy Thông", "Duy Tiếp", "Duy Tuyền", "Gia Ân", "Gia Anh", "Gia Bạch", "Gia Bảo", "Gia Bình", "Gia Cần", "Gia Cẩn", "Gia Cảnh", "Gia Ðạo", "Gia Ðức", "Gia Hiệp", "Gia Hòa", "Gia Hoàng", "Gia Huấn", "Gia Hùng", "Gia Hưng", "Gia Huy", "Gia Khánh", "Gia Khiêm", "Gia Kiên", "Gia Kiệt", "Gia Lập", "Gia Minh", "Gia Nghị", "Gia Phong", "Gia Phúc", "Gia Phước", "Gia Thiện", "Gia Thịnh", "Gia Uy", "Gia Vinh", "Giang Lam", "Giang Nam", "Giang Sơn", "Giang Thiên", "Hà Hải", "Hải Bằng", "Hải Bình", "Hải Ðăng", "Hải Dương", "Hải Giang", "Hải Hà", "Hải Long", "Hải Lý", "Hải Nam", "Hải Nguyên", "Hải Phong", "Hải Quân", "Hải Sơn", "Hải Thụy", "Hán Lâm", "Hạnh Tường", "Hào Nghiệp", "Hạo Nhiên", "Hiền Minh", "Hiệp Dinh", "Hiệp Hà", "Hiệp Hào", "Hiệp Hiền", "Hiệp Hòa", "Hiệp Vũ", "Hiếu Dụng", "Hiếu Học", "Hiểu Lam", "Hiếu Liêm", "Hiếu Nghĩa", "Hiếu Phong", "Hiếu Thông", "Hồ Bắc", "Hồ Nam", "Hòa Bình", "Hòa Giang", "Hòa Hiệp", "Hòa Hợp", "Hòa Lạc", "Hòa Thái", "Hoài Bắc", "Hoài Nam", "Hoài Phong", "Hoài Thanh", "Hoài Tín", "Hoài Trung", "Hoài Việt", "Hoài Vỹ", "Hoàn Kiếm", "Hoàn Vũ", "Hoàng Ân", "Hoàng Duệ", "Hoàng Dũng", "Hoàng Giang", "Hoàng Hải", "Hoàng Hiệp", "Hoàng Khải", "Hoàng Khang", "Hoàng Khôi", "Hoàng Lâm", "Hoàng Linh", "Hoàng Long", "Hoàng Minh", "Hoàng Mỹ", "Hoàng Nam", "Hoàng Ngôn", "Hoàng Phát", "Hoàng Quân", "Hoàng Thái", "Hoàng Tùng", "Hoàng Việt", "Hoàng Xuân", "Hồng Ðăng", "Hồng Đức", "Hồng Giang", "Hồng Lân", "Hồng Liêm", "Hồng Lĩnh", "Hồng Minh", "Hồng Nhật", "Hồng Nhuận", "Hồng Phát", "Hồng Quang", "Hồng Quý", "Hồng Sơn", "Hồng Thịnh", "Hồng Thụy", "Hồng Việt", "Hồng Vinh", "Huân Võ", "Hùng Anh", "Hùng Cường", "Hưng Ðạo", "Hùng Dũng", "Hùng Ngọc", "Hùng Phong", "Hùng Sơn", "Hùng Thịnh", "Hùng Tường", "Hướng Bình", "Hướng Dương", "Hướng Thiện", "Hướng Tiền", "Hữu Bào", "Hữu Bảo", "Hữu Bình", "Hữu Canh", "Hữu Cảnh", "Hữu Châu", "Hữu Chiến", "Hữu Cương", "Hữu Cường", "Hữu Ðạt", "Hữu Ðịnh", "Hữu Hạnh", "Hữu Hiệp", "Hữu Hoàng", "Hữu Hùng", "Hữu Khang", "Hữu Khanh", "Hữu Khoát", "Hữu Khôi", "Hữu Long", "Hữu Lương", "Hữu Minh", "Hữu Nam", "Hữu Nghị", "Hữu Nghĩa", "Hữu Phước", "Hữu Tài", "Hữu Tâm", "Hữu Tân", "Hữu Thắng", "Hữu Thiện", "Hữu Thọ", "Hữu Thống", "Hữu Thực", "Hữu Toàn", "Hữu Trác", "Hữu Trí", "Hữu Trung", "Hữu Từ", "Hữu Tường", "Hữu Vĩnh", "Hữu Vượng", "Huy Anh", "Huy Chiểu", "Huy Hà", "Huy Hoàng", "Huy Kha", "Huy Khánh", "Huy Khiêm", "Huy Lĩnh", "Huy Phong", "Huy Quang", "Huy Thành", "Huy Thông", "Huy Trân", "Huy Tuấn", "Huy Tường", "Huy Việt", "Huy Vũ", "Khắc Anh", "Khắc Công", "Khắc Dũng", "Khắc Duy", "Khắc Kỷ", "Khắc Minh", "Khắc Ninh", "Khắc Thành", "Khắc Triệu", "Khắc Trọng", "Khắc Tuấn", "Khắc Việt", "Khắc Vũ", "Khải Ca", "Khải Hòa", "Khai Minh", "Khải Tâm", "Khải Tuấn", "Khang Kiện", "Khánh An", "Khánh Bình", "Khánh Ðan", "Khánh Duy", "Khánh Giang", "Khánh Hải", "Khánh Hòa", "Khánh Hoàn", "Khánh Hoàng", "Khánh Hội", "Khánh Huy", "Khánh Minh", "Khánh Nam", "Khánh Văn", "Khoa Trưởng", "Khôi Nguyên", "Khởi Phong", "Khôi Vĩ", "Khương Duy", "Khuyến Học", "Kiên Bình", "Kiến Bình", "Kiên Cường", "Kiến Ðức", "Kiên Giang", "Kiên Lâm", "Kiên Trung", "Kiến Văn", "Kiệt Võ", "Kim Ðan", "Kim Hoàng", "Kim Long", "Kim Phú", "Kim Sơn", "Kim Thịnh", "Kim Thông", "Kim Toàn", "Kim Vượng", "Kỳ Võ", "Lạc Nhân", "Lạc Phúc", "Lâm Ðồng", "Lâm Dũng", "Lam Giang", "Lam Phương", "Lâm Trường", "Lâm Tường", "Lâm Viên", "Lâm Vũ", "Lập Nghiệp", "Lập Thành", "Liên Kiệt", "Long Giang", "Long Quân", "Long Vịnh", "Lương Quyền", "Lương Tài", "Lương Thiện", "Lương Tuyền", "Mạnh Cương", "Mạnh Cường", "Mạnh Ðình", "Mạnh Dũng", "Mạnh Hùng", "Mạnh Nghiêm", "Mạnh Quỳnh", "Mạnh Tấn", "Mạnh Thắng", "Mạnh Thiện", "Mạnh Trình", "Mạnh Trường", "Mạnh Tuấn", "Mạnh Tường", "Minh Ân", "Minh Anh", "Minh Cảnh", "Minh Dân", "Minh Ðan", "Minh Danh", "Minh Ðạt", "Minh Ðức", "Minh Dũng", "Minh Giang", "Minh Hải", "Minh Hào", "Minh Hiên", "Minh Hiếu", "Minh Hòa", "Minh Hoàng", "Minh Huấn", "Minh Hùng", "Minh Hưng", "Minh Huy", "Minh Hỷ", "Minh Khang", "Minh Khánh", "Minh Khiếu", "Minh Khôi", "Minh Kiệt", "Minh Kỳ", "Minh Lý", "Minh Mẫn", "Minh Nghĩa", "Minh Nhân", "Minh Nhật", "Minh Nhu", "Minh Quân", "Minh Quang", "Minh Quốc", "Minh Sơn", "Minh Tân", "Minh Thạc", "Minh Thái", "Minh Thắng", "Minh Thiện", "Minh Thông", "Minh Thuận", "Minh Tiến", "Minh Toàn", "Minh Trí", "Minh Triết", "Minh Triệu", "Minh Trung", "Minh Tú", "Minh Tuấn", "Minh Vu", "Minh Vũ", "Minh Vương", "Mộng Giác", "Mộng Hoàn", "Mộng Lâm", "Mộng Long", "Nam An", "Nam Dương", "Nam Hải", "Nam Hưng", "Nam Lộc", "Nam Nhật", "Nam Ninh", "Nam Phi", "Nam Phương", "Nam Sơn", "Nam Thanh", "Nam Thông", "Nam Tú", "Nam Việt", "Nghị Lực", "Nghị Quyền", "Nghĩa Dũng", "Nghĩa Hòa", "Ngọc Ẩn", "Ngọc Cảnh", "Ngọc Cường", "Ngọc Danh", "Ngọc Đại", "Ngọc Ðoàn", "Ngọc Dũng", "Ngọc Hải", "Ngọc Hiển", "Ngọc Huy", "Ngọc Khang", "Ngọc Khôi", "Ngọc Khương", "Ngọc Lai", "Ngọc Lân", "Ngọc Minh", "Ngọc Ngạn", "Ngọc Quang", "Ngọc Sơn", "Ngọc Thạch", "Ngọc Thiện", "Ngọc Thọ", "Ngọc Thuận", "Ngọc Tiển", "Ngọc Trụ", "Ngọc Tuấn", "Nguyên Bảo", "Nguyên Bổng", "Nguyên Ðan", "Nguyên Giang", "Nguyên Giáp", "Nguyễn Hải An", "Nguyên Hạnh", "Nguyên Khang", "Nguyên Khôi", "Nguyên Lộc", "Nguyên Nhân", "Nguyên Phong", "Nguyên Sử", "Nguyên Văn", "Nhân Nguyên", "Nhân Sâm", "Nhân Từ", "Nhân Văn", "Nhật Bảo Long", "Nhật Dũng", "Nhật Duy", "Nhật Hòa", "Nhật Hoàng", "Nhật Hồng", "Nhật Hùng", "Nhật Huy", "Nhật Khương", "Nhật Minh", "Nhật Nam", "Nhật Quân", "Nhật Quang", "Nhật Quốc", "Nhật Tấn", "Nhật Thịnh", "Nhất Tiến", "Nhật Tiến", "Như Khang", "Niệm Nhiên", "Phi Cường", "Phi Ðiệp", "Phi Hải", "Phi Hoàng", "Phi Hùng", "Phi Long", "Phi Nhạn", "Phong Châu", "Phong Dinh", "Phong Ðộ", "Phú Ân", "Phú Bình", "Phú Hải", "Phú Hiệp", "Phú Hùng", "Phú Hưng", "Phú Thịnh", "Phú Thọ", "Phú Thời", "Phúc Cường", "Phúc Ðiền", "Phúc Duy", "Phúc Hòa", "Phúc Hưng", "Phúc Khang", "Phúc Lâm", "Phục Lễ", "Phúc Nguyên", "Phúc Sinh", "Phúc Tâm", "Phúc Thịnh", "Phụng Việt", "Phước An", "Phước Lộc", "Phước Nguyên", "Phước Nhân", "Phước Sơn", "Phước Thiện", "Phượng Long", "Phương Nam", "Phương Phi", "Phương Thể", "Phương Trạch", "Phương Triều", "Quân Dương", "Quang Anh", "Quang Bửu", "Quảng Ðại", "Quang Danh", "Quang Ðạt", "Quảng Ðạt", "Quang Ðức", "Quang Dũng", "Quang Dương", "Quang Hà", "Quang Hải", "Quang Hòa", "Quang Hùng", "Quang Hưng", "Quang Hữu", "Quang Huy", "Quang Khải", "Quang Khanh", "Quang Lâm", "Quang Lân", "Quang Linh", "Quang Lộc", "Quang Minh", "Quang Nhân", "Quang Nhật", "Quang Ninh", "Quang Sáng", "Quang Tài", "Quang Thạch", "Quang Thái", "Quang Thắng", "Quang Thiên", "Quang Thịnh", "Quảng Thông", "Quang Thuận", "Quang Triều", "Quang Triệu", "Quang Trọng", "Quang Trung", "Quang Trường", "Quang Tú", "Quang Tuấn", "Quang Vinh", "Quang Vũ", "Quang Xuân", "Quốc Anh", "Quốc Bảo", "Quốc Bình", "Quốc Ðại", "Quốc Ðiền", "Quốc Hải", "Quốc Hạnh", "Quốc Hiền", "Quốc Hiển", "Quốc Hòa", "Quốc Hoài", "Quốc Hoàng", "Quốc Hùng", "Quốc Hưng", "Quốc Huy", "Quốc Khánh", "Quốc Mạnh", "Quốc Minh", "Quốc Mỹ", "Quốc Phong", "Quốc Phương", "Quốc Quân", "Quốc Quang", "Quốc Quý", "Quốc Thắng", "Quốc Thành", "Quốc Thiện", "Quốc Thịnh", "Quốc Thông", "Quốc Tiến", "Quốc Toản", "Quốc Trụ", "Quốc Trung", "Quốc Trường", "Quốc Tuấn", "Quốc Văn", "Quốc Việt", "Quốc Vinh", "Quốc Vũ", "Quý Khánh", "Quý Vĩnh", "Quyết Thắng", "Sĩ Hoàng", "Sơn Dương", "Sơn Giang", "Sơn Hà", "Sơn Hải", "Sơn Lâm", "Sơn Quân", "Sơn Quyền", "Sơn Trang", "Sơn Tùng", "Song Lam", "Sỹ Ðan", "Sỹ Hoàng", "Sỹ Phú", "Sỹ Thực", "Tạ Hiền", "Tài Ðức", "Tài Nguyên", "Tâm Thiện", "Tân Bình", "Tân Ðịnh", "Tấn Dũng", "Tấn Khang", "Tấn Lợi", "Tân Long", "Tấn Nam", "Tấn Phát", "Tân Phước", "Tấn Sinh", "Tấn Tài", "Tân Thành", "Tấn Thành", "Tấn Trình", "Tấn Trương", "Tất Bình", "Tất Hiếu", "Tất Hòa", "Thạch Sơn", "Thạch Tùng", "Thái Bình", "Thái Ðức", "Thái Dương", "Thái Duy", "Thái Hòa", "Thái Minh", "Thái Nguyên", "Thái San", "Thái Sang", "Thái Sơn", "Thái Tân", "Thái Tổ", "Thắng Cảnh", "Thắng Lợi", "Thăng Long", "Thành An", "Thành Ân", "Thành Châu", "Thành Công", "Thành Danh", "Thanh Ðạo", "Thành Ðạt", "Thành Ðệ", "Thanh Ðoàn", "Thành Doanh", "Thanh Hải", "Thanh Hào", "Thanh Hậu", "Thành Hòa", "Thanh Huy", "Thành Khiêm", "Thanh Kiên", "Thanh Liêm", "Thành Lợi", "Thanh Long", "Thành Long", "Thanh Minh", "Thành Nguyên", "Thành Nhân", "Thanh Phi", "Thanh Phong", "Thành Phương", "Thanh Quang", "Thành Sang", "Thanh Sơn", "Thanh Thế", "Thanh Thiên", "Thành Thiện", "Thanh Thuận", "Thành Tín", "Thanh Tịnh", "Thanh Toàn", "Thanh Toản", "Thanh Trung", "Thành Trung", "Thanh Tú", "Thanh Tuấn", "Thanh Tùng", "Thanh Việt", "Thanh Vinh", "Thành Vinh", "Thanh Vũ", "Thành Ý", "Thất Cương", "Thất Dũng", "Thất Thọ", "Thế An", "Thế Anh", "Thế Bình", "Thế Dân", "Thế Doanh", "Thế Dũng", "Thế Duyệt", "Thế Huấn", "Thế Hùng", "Thế Lâm", "Thế Lực", "Thế Minh", "Thế Năng", "Thế Phúc", "Thế Phương", "Thế Quyền", "Thế Sơn", "Thế Trung", "Thế Tường", "Thế Vinh", "Thiên An", "Thiên Ân", "Thiện Ân", "Thiên Bửu", "Thiên Ðức", "Thiện Ðức", "Thiện Dũng", "Thiện Giang", "Thiên Hưng", "Thiện Khiêm", "Thiên Lạc", "Thiện Luân", "Thiên Lương", "Thiện Lương", "Thiên Mạnh", "Thiện Minh", "Thiện Ngôn", "Thiên Phú", "Thiện Phước", "Thiện Sinh", "Thiện Tâm", "Thiện Thanh", "Thiện Thuật", "Thiện Tính", "Thiên Trí", "Thiếu Anh", "Thiệu Bảo", "Thiếu Cường", "Thịnh Cường", "Thời Nhiệm", "Thông Ðạt", "Thông Minh", "Thống Nhất", "Thông Tuệ", "Thụ Nhân", "Thu Sinh", "Thuận Anh", "Thuận Hòa", "Thuận Phong", "Thuận Phương", "Thuận Thành", "Thuận Toàn", "Thượng Cường", "Thượng Khang", "Thường Kiệt", "Thượng Liệt", "Thượng Năng", "Thượng Nghị", "Thượng Thuật", "Thường Xuân", "Thụy Du", "Thụy Long", "Thụy Miên", "Thụy Vũ", "Tích Ðức", "Tích Thiện", "Tiến Ðức", "Tiến Dũng", "Tiền Giang", "Tiến Hiệp", "Tiến Hoạt", "Tiến Võ", "Tiểu Bảo", "Toàn Thắng", "Tôn Lễ", "Trí Dũng", "Trí Hào", "Trí Hùng", "Trí Hữu", "Trí Liên", "Trí Minh", "Trí Thắng", "Trí Tịnh", "Triển Sinh", "Triệu Thái", "Triều Thành", "Trọng Chính", "Trọng Dũng", "Trọng Duy", "Trọng Hà", "Trọng Hiếu", "Trọng Hùng", "Trọng Khánh", "Trọng Kiên", "Trọng Nghĩa", "Trọng Nhân", "Trọng Tấn", "Trọng Trí", "Trọng Tường", "Trọng Việt", "Trọng Vinh", "Trúc Cương", "Trúc Sinh", "Trung Anh", "Trung Chính", "Trung Chuyên", "Trung Ðức", "Trung Dũng", "Trung Hải", "Trung Hiếu", "Trung Kiên", "Trung Lực", "Trung Nghĩa", "Trung Nguyên", "Trung Nhân", "Trung Thành", "Trung Thực", "Trung Việt", "Trường An", "Trường Chinh", "Trường Giang", "Trường Hiệp", "Trường Kỳ", "Trường Liên", "Trường Long", "Trường Nam", "Trường Nhân", "Trường Phát", "Trường Phu", "Trường Phúc", "Trường Sa", "Trường Sinh", "Trường Sơn", "Trường Thành", "Trường Thịnh", "Trường Vinh", "Trường Vũ", "Từ Ðông", "Tuấn Anh", "Tuấn Châu", "Tuấn Chương", "Tuấn Ðức", "Tuấn Dũng", "Tuấn Hải", "Tuấn Hoàng", "Tuấn Hùng", "Tuấn Khải", "Tuấn Khanh", "Tuấn Khoan", "Tuấn Kiệt", "Tuấn Linh", "Tuấn Long", "Tuấn Minh", "Tuấn Ngọc", "Tuấn Sĩ", "Tuấn Sỹ", "Tuấn Tài", "Tuấn Thành", "Tuấn Trung", "Tuấn Tú", "Tuấn Việt", "Tùng Anh", "Tùng Châu", "Tùng Lâm", "Tùng Linh", "Tùng Minh", "Tùng Quang", "Tường Anh", "Tường Lâm", "Tường Lân", "Tường Lĩnh", "Tường Minh", "Tường Nguyên", "Tường Phát", "Tường Vinh", "Tuyền Lâm", "Uy Phong", "Uy Vũ", "Vạn Hạnh", "Vạn Lý", "Văn Minh", "Vân Sơn", "Vạn Thắng", "Vạn Thông", "Văn Tuyển", "Viễn Cảnh", "Viễn Ðông", "Viễn Phương", "Viễn Thông", "Việt An", "Việt Anh", "Việt Chính", "Việt Cương", "Việt Cường", "Việt Dũng", "Việt Dương", "Việt Duy", "Việt Hải", "Việt Hoàng", "Việt Hồng", "Việt Hùng", "Việt Huy", "Việt Khải", "Việt Khang", "Việt Khoa", "Việt Khôi", "Việt Long", "Việt Ngọc", "Viết Nhân", "Việt Nhân", "Việt Phong", "Việt Phương", "Việt Quốc", "Việt Quyết", "Viết Sơn", "Việt Sơn", "Viết Tân", "Việt Thái", "Việt Thắng", "Việt Thanh", "Việt Thông", "Việt Thương", "Việt Tiến", "Việt Võ", "Vĩnh Ân", "Vinh Diệu", "Vĩnh Hải", "Vĩnh Hưng", "Vĩnh Long", "Vĩnh Luân", "Vinh Quốc", "Vĩnh Thọ", "Vĩnh Thụy", "Vĩnh Toàn", "Vũ Anh", "Vũ Minh", "Vương Gia", "Vương Triều", "Vương Triệu", "Vương Việt", "Xuân An", "Xuân Bình", "Xuân Cao", "Xuân Cung", "Xuân Hàm", "Xuân Hãn", "Xuân Hiếu", "Xuân Hòa", "Xuân Huy", "Xuân Khoa", "Xuân Kiên", "Xuân Lạc", "Xuân Lộc", "Xuân Minh", "Xuân Nam", "Xuân Ninh", "Xuân Phúc", "Xuân Quân", "Xuân Quý", "Xuân Sang", "Xuân Sơn", "Xuân Thái", "Xuân Thiện", "Xuân Thuyết", "Xuân Trung", "Xuân Trường", "Xuân Tường", "Xuân Vũ", "Yên Bằng", "Yên Bình", "Yên Sơn"]
let arrOrgId = ['8348', '8356', '8966', '13116', '17818', '5408', '5409', '16271', '8396', '8397', '9021', '9075', '9190', '9206', '17835', '8409', '8416', '9215', '9242', '11631', '11634', '11650', '11673', '11692', '13121', '13128', '13148', '13166', '13169', '13183', '13213', '13246', '13271', '15563', '5448', '8528', '17856', '8559', '13297', '8649', '9559', '9560', '9549', '9567', '9583', '9664', '9669', '9671', '8945', '9734', '13305', '13341', '13354', '13366', '9853', '13449', '13468', '13480', '13527', '13528', '13535', '13536', '13541', '13557', '13571', '13572', '13588', '9924', '9929', '10026', '11405', '13600', '13605', '13606', '11427', '11428', '13621', '13622', '13642', '13643', '13652', '13658', '13661', '13664', '5474', '12432', '12438', '5486', '10106', '12468', '12484', '16369', '16370', '5496', '5501', '16382', '11085', '12566', '12597', '11220']
let teiId = 1026
let cmt = 1300203
let arrSex = ["01", "02"]
let arrAdress = ["Alexandre de Rhodes", "Bà Lê Chân", "Bùi Thị Xuân", "Bùi Viện", "Cách Mạng Tháng Tám", "Calmette", "Cao Bá Nhạ", "Cao Bá Quát", "Cô Bắc", "Cô Giang", "Cống Quỳnh", "Chu Mạnh Trinh", "Chương Dương", "Đặng Dung", "Đặng Tất", "Đặng Thị Nhu", "Đặng Trần Côn", "Đề Thám", "Đinh Công Tráng", "Alexandre de Rhodes", "Đồng Khởi", "Hai Bà Trưng", "Hải Triều", "Hàm Nghi", "Bà Lê Chân", "Hàn Thuyên", "Hòa Mỹ", "Hồ Hảo Hớn", "Hồ Huấn Nghiệp", "Bùi Thị Xuân", "Hồ Tùng Mậu", "Hoàng Sa", "Huyền Quang", "Huyền Trân Công Chúa", "Huỳnh Khương Ninh", "Huỳnh Thúc Kháng", "Bùi Viện", "Ký Con", "Lê Anh Xuân", "Lê Công Kiều", "Lê Duẩn", "Lê Lai", "Lê Lợi", "Cách Mạng Tháng Tám", "Lê Thị Hồng Gấm", "Lê Thị Riêng", "Lê Văn Hưu", "Lương Hữu Khánh", "Lưu Văn Lang", "Lý Văn Phức", "Mã Lộ", "Mạc Đĩnh Chi", "Mạc Thị Bưởi", "Mai Thị Lựu", "Nam Kỳ Khởi Nghĩa", "Nam Quốc Cang", "Ngô Đức Kế", "Ngô Văn Năm", "Nguyễn Bỉnh Khiêm", "Calmette", "Cao Bá Nhạ", "Cao Bá Quát", "Cô Bắc", "Cô Giang", "Cống Quỳnh", "Chu Mạnh Trinh", "Nguyễn Huệ", "Nguyễn Hữu Cảnh", "Nguyễn Hữu Cầu", "Nguyễn Huy Tự", "Nguyễn Khắc Nhu", "Nguyễn Phi Khanh", "Nguyễn Thái Bình", "Bà Huyện Thanh Quan", "Bàn Cờ", "Cách Mạng Tháng Tám", "Calmette", "Cao Thắng", "Điện Biên Phủ", "Cao Bá Nhạ", "Hai Bà Trưng", "Hồ Xuân Hương", "Huỳnh Tịnh Của", "Cao Bá Quát", "Lê Ngô Cát", "Lê Quý Đôn", "Nguyễn Văn Trỗi", "Lê Văn Sỹ", "Lý Chính Thắng", "Lý Thái Tổ", "Cô Bắc", "Cao Thắng", "Cầm Bá Thước", "Cô Bắc", "Cô Giang", "Chiến Thắng", "Duy Tân", "Đào Duy Anh", "Đào Duy Từ", "Đặng Thai Mai", "Cô Giang", "Đoàn Thị Điểm", "Đỗ Tấn Phong", "Hải Nam", "Hoàng Diệu", "Hoàng Minh Giám", "Hoàng Văn Thụ", "Hồ Biểu Chánh", "Hồ Văn Huê", "Cống Quỳnh", "Lam Sơn", "Lê Quý Đôn", "Nguyễn Văn Trỗi", "Lê Văn Sỹ", "Mai Văn Ngọc", "Ngô Thời Nhiệm", "Nguyễn Đình Chiểu", "Nguyễn Đình Chính", "Chu Mạnh Trinh", "Nguyễn Thị Huỳnh", "Nguyễn Trọng Tuyển", "Nguyễn Trường Tộ", "Nguyễn Văn Đậu", "Nam Kỳ Khởi Nghĩa", "Nguyễn Văn Trỗi", "Chương Dương", "Đặng Dung", "Đặng Tất", "Đặng Thị Nhu", "Đặng Trần Côn", "Đề Thám", "Đinh Công Tráng", "Chương Dương", "Trần Huy Liệu", "Trần Hữu Trang", "Trần Kế Xương", "Trần Khắc Chân", "Trần Văn Đang", "Trương Quốc Dung"]
//let arrOrgUnit = ["oPz2zI7WjGR", "XZkFcvQIStZ", "BCVhRd3UO2G", "SouMxW8PKTH", "or9hopOQOsy", "qeBWV75wC9e", "Dum5CiPY2le", "i9laNHKYNET", "zvPwwNGAMbR", "VOhCDrFeUwL", "i7t9qfKQHpg", "wwhuzgZMxGb", "bUlAd0B52VD", "vU2ducJiHqx", "NllmaiOTckB", "bA7NdecrIE9", "hfOq94xSLX8", "aEHzJiOALDM", "IvYQGk3g3gf", "kjtWteOoIZ2", "XNrxDPNZqMK", "ds8dSnXzkga", "pISrgsPKiKl", "WBtyDZiXImQ", "LsxL32CZRtg", "yk9jvWItg6Z", "UUbB4wNtv3J", "xF7EG6jKfGR", "AniNiDnBD9a", "pZF00dUmuTJ", "hwPGZmkg8Oz", "CIbSUaRp5Or", "eERFCGxvzQg", "DUACL8PEWby", "rdCAmwINdLE", "o5AFgPXNwX1", "ihQbtsXW01b", "T2yJh02sQBT", "pnZh7qRJq2I", "zcrJQrZ6tlA", "Ppk2U1cK36v", "G0YNdUlxNuI", "VRfoGqbijpS", "qjo9Ng6n6l7", "t9NtqyApKQj", "xdybnFpAdG4", "O60A64VZTjM", "BcKHMitfdD0", "cAezjc24Nnh", "s3VkPKNuiSE", "AqrtFS2uUe3", "u9QXfcUzeO7", "ScSQjHszXf1", "wltFn4MNe0a", "GPowYwIUS1p", "BG25MCJTr3t", "Ef5A77H53cP", "TNxHOJwYsaX", "umPHDDFsvpA", "cqe2YQlkYpZ", "RJMyHkiVZfK", "IA6JKyLNawk", "yMl3qchHAVX", "pggOaCM0jUQ", "qln1vvxeqMr", "VBCtXT2deNk", "W5bYAA99pOK", "l11GZOldSrG", "zDrBdvPmVAN", "JpEvzmQPrKP", "A9TTy61HhWT", "scdQ3JZXVZf", "PGEUP9liAbu", "OLjPujdfMjA", "s0fhED6Ssi4", "W3ixhlYABQg", "pRypKwEXTp1", "ThmgypAOtFe", "hW4RSMqrULB", "iYkskhvbf0h", "sWGDZiheQ58", "P4QWrvQVbRQ", "bN765ZuykmB", "WHlDaK1XI4Q", "s7aY61ZrMCw", "rPkn7Mu7r1u", "qmho9XBhBNM", "PaGuFlEdS90", "Nd6fvXeEt3I", "emoETjH9nU5", "pfOStvn0mrx", "B1Vl8Epj9rN", "w1Jh4qkYYlB", "mEFDdbKauMT", "TbZnMM8nRnq", "UgKQvyV3lei", "oywCRpLYfCF", "YRI4BfWJ7ur", "KCIIq9TQvgV", "UqF6vO9TBYN", "PaJJ1kUUnB2", "p5J5grSR7nb", "vwUir9AjFhz", "mR0KVsmRFc7", "DemYfepAHIC", "H2bpynSP0Iy", "YImcp6eVjPF", "oKLKZkpMb7M", "ycTo3Bi8HI2", "HC6gndOsvdt", "Pbc7J1acNMk", "J0mo074tNzu", "xNulCihXVLl", "yaBk6XccO73", "whB3WZvaS13", "MtVqJrBE6JA", "eCA1e2xFUwF", "AV1LOEnFsk5", "oiSVVv9UeNO", "lBHiZ0B7bIZ", "TFrN3wcty5r", "o6RsKSLH1gq", "egW8yx1rTyT", "mmgTir4hkTt", "e6nTU4Gn9Vi", "ZvbgWHfhgXH", "X65ntvfsNF2", "OmT9gTdjtgH", "aFWhTSmJd5v", "FslWkivJgPq", "W8d3NskCsaS", "aE97ryJdRV1", "ljbyH9wsFvj", "OhLXnsUwlOr", "Aq578B58tWM", "VsdVcHt6x0O", "hCynYQ82Tt2", "K5q0yqtsLns", "Wx61ysR9xYg", "sauHHdbEGYx", "UC70fiuHW8R", "h5f41PoLgNf", "F9fmnv4Agug", "ieIjB36g9Qu", "bByT5eoQTzu", "X2bveet1QcB", "W3h8h8wz7mB", "PEDH8RiGzjN", "xfEjXAmbt69", "Ec4ZMp6Mc7J", "uCKZhKLJgzx", "mvD9cMM6ITP", "R3Nxtuob3g2", "u53tneEgn7N", "WNWaKsJdCk3", "s6xAByrzkKj", "p2A5ShbeI0V", "e815vua0QBm", "n3jHM5TxNgs", "uK9k9fJ21MI", "jy4FGVG4xWI", "Q5FoOov186F", "XLpw0nIWuqj", "ebmis3sHmdn", "xUu8QhC6ZcY", "eKXbnKF3l7t", "TIAy8OlpfXR", "CFwu1WXMp18", "kef3Fq11inu", "X2P1vSZIWV2", "MsEptJJSFbd", "RhQYlS2qHj0", "K1jUxI2nY8O", "OpcnVp4Ye0P", "NGtYklHRtGv", "I71CPkG227S", "dz0ytT2Wdi0", "fPxF7YfPpAS", "tWQ4nHn9HIK", "wTXAiDfabzT", "mO4LW57KYlm", "f4ju70GZSDo", "dH1HjqnyYU5", "Q7S3mcwlZz8", "BaDWb5YxeTh", "CtQwoF3yXNh"]
let arrOrgUnit = ["pggOaCM0jUQ","OLjPujdfMjA","Q5FoOov186F"]
let resultTei = {

    "trackedEntityInstances": []
}
for (let i = 0; i < 100; i++) {
    let mOrgUnit = `${arrOrgUnit[getRandomInt(0, arrOrgUnit.length - 1)]}`
    let mEnrollmentDate = `2021-08-27`
    let mEventDate = `2021-${getRandomIntStart0(1, 8)}-${getRandomIntStart0(1, 27)}`
    let sn = getRandomInt(0, surnameArr.length - 1)
    let ln = getRandomInt(0, lastNameArr.length - 1)
    let mFullName = `${surnameArr[sn]} ${lastNameArr[ln]}`
    let mBirthDay = `${getRandomInt(1970, 2000)}-${getRandomIntStart0(1, 12)}-${getRandomIntStart0(1, 27)}`
    let mAddress = `${getRandomInt(1, 1000)} ${arrAdress[getRandomInt(0, arrAdress.length - 1)]}`
    let mSex = `${arrSex[getRandomInt(0, 1)]}`
    let mCMT = `${cmt++}`
    let mDanToc = `${getRandomInt(0,50)}`

    let mPhanLoaiBenh = `${getRandomInt(1, 5)}`
    let mPhanLoaiBenhNhan = `${getRandomInt(0, 3)}`
    let mKiemtraTaiNha = `${getRandomInt(1,2)}`
    let mMucDoPHCN = `${getRandomInt(1,3)}`
    let mKetquaDieuTri = `${getRandomInt(0, 1)}`
    let mThuoc = `Thuoc 1\nThuoc 2\nThuoc 3`
    if(mPhanLoaiBenhNhan == 3){
        mPhanLoaiBenhNhan = 5;
        mThuoc = ''
    }
    let mNgayPhatHien = ''
    let mNoiPhatHien = ''
    if(mPhanLoaiBenhNhan == 0 ){
        mNgayPhatHien = `${parseInt(mEventDate.substring(0,4)) - getRandomInt(1,2)}-${roundInt(parseInt(mEventDate.substring(5,7)) - getRandomInt(0,12))}-${roundInt(parseInt(mEventDate.substring(8,10)) - getRandomInt(0,30))}`
        mNoiPhatHien = `${getRandomInt(1, 6)}`
    }
    let mMucDoRuouBia = `${getRandomInt(1,4)}`
    let mDiemBECK = `${getRandomInt(0, 63)}`
    let mDiemGAD7 = `${getRandomInt(0, 21)}`
    let mDiemPHQ9 = `${getRandomInt(0, 27)}`
    let mDiemZUNG = `${getRandomInt(0, 80)}`

    let mHutThuocLa = `${getRandomInt(0, 2)}`
    let mMucDoKhoThomMRC = `${getRandomInt(0, 4)}`
    let mDiemCAT = `${getRandomInt(0, 40)}`
    let mLuuLuongDinh = `${getRandomInt(1, 3)}`
    let mMucDoKhoTho = `${getRandomInt(0, 2)}`
    let mLamViecSinhHoat = `${getRandomInt(1, 3)}`
    let mSoDotCap = `${getRandomInt(1, 2)}`
    if(mPhanLoaiBenh==1 || mPhanLoaiBenh==2 || mPhanLoaiBenh==4){
        mDiemBECK = ''
        mDiemGAD7 = ''
        mDiemPHQ9 = ''
        mDiemZUNG = ''
    } else {
        if(mPhanLoaiBenh==3){
            mDiemGAD7 = ''
            mDiemZUNG = ''
        }else {
            mDiemBECK = ''
            mDiemPHQ9 = ''
        }
        
    }
    
    let mYBacSy = `Bác Sỹ ${getRandomInt(1, 9)}`
    let mChanDoan = `Chẩn đoán ${getRandomInt(1, 9)}`
    let mNhanXet = `Nhận xét ${getRandomInt(1, 9)}`
    let mBienChung = `${getRandomInt(1, 2)}`
    let mGhiRoBienChung = `Biến chứng ${getRandomInt(1, 9)}`
    if(mBienChung==1){
        mGhiRoBienChung = ''
    }
    let mTei =
    {
        "orgUnit": mOrgUnit,
        "trackedEntityType": "EL3fkeMR3xK", //Bệnh nhân
        "inactive": false,
        "deleted": false,
        "featureType": "NONE",
        "programOwners": [],
        "enrollments": [
            {
                "orgUnit": mOrgUnit,
                "program": "WmEGO8Ipykm", // Tâm thần
                "enrollmentDate": mEnrollmentDate,
                "incidentDate": mEnrollmentDate,
                "events": [
                    {
                        "program": "WmEGO8Ipykm", 
                        "orgUnit": mOrgUnit,
                        "eventDate": mEventDate,
                        "status": "COMPLETED",
                        "storedBy": "duylp",
                        "programStage": "Mbxbdi53AwF", //Tâm thần - Quản lý điều trị
                        "dataValues": [
                            {
                                "dataElement": "iXw1Eq7HqjS", // "Phân loại bệnh nhân"
                                    "value": mPhanLoaiBenhNhan
                            },
                            {
                                "dataElement": "jd8vkowkM7G", // "Phân loại bệnh Tâm thần"
                                    "value": mPhanLoaiBenh
                            },
                            {
                                "dataElement": "QQy8lSwFmQl", // "Kiểm tra tại nhà Tâm thần"
                                    "value": mKiemtraTaiNha
                            },
                            {
                                "dataElement": "IXER2ABXOfj", // "Mức độ PHCN Tâm thần"
                                    "value": mMucDoPHCN
                            },
                            {
                                "dataElement": "iihmh4K0k18", // "Thuốc Tâm thần"
                                    "value": mThuoc
                            },
                            {
                                "dataElement": "p3qT2PpuLFS", // "Ngày phát hiện"
                                    "value": mNgayPhatHien
                            },
                            {
                                "dataElement": "DFHdfkyZaZO", // "Nơi phát hiện"
                                    "value": mNoiPhatHien
                            },
                            {
                                "dataElement": "vVs8M3PXMX1", // "Mức độ uống rượu, bia"
                                    "value": mMucDoRuouBia
                            },
                            {
                                "dataElement": "uhgWbum6R2v", // "Điểm BECK"
                                    "value": mDiemBECK
                            },
                            {
                                "dataElement": "PfsxYCRh9Pk", // "Điểm GAD7"
                                    "value": mDiemGAD7
                            },
                            {
                                "dataElement": "tdXMscfrp5a", // "Điểm PHQ9"
                                    "value": mDiemPHQ9
                            },
                            {
                                "dataElement": "VuIZM4XyVSf", // "Điểm ZUNG"
                                    "value": mDiemZUNG
                            },
                            {
                                "dataElement": "mVdtFRM2gFX", // "Nhận xét/lời dặn"
                                    "value": mNhanXet
                            },
                            {
                                "dataElement": "mOguWgQg1or", // "Y bác sĩ khám bệnh"
                                    "value": mYBacSy
                            },
                            {
                                "dataElement": "udwtZvJMnVL", // "Chẩn đoán"
                                    "value": mChanDoan
                            },
                            {
                                "dataElement": "X0kBm02Gyft", // "Biến chứng"
                                    "value": mBienChung
                            },
                            {
                                "dataElement": "hfGTym6BfK1", // "Ghi rõ biến chứng"
                                    "value": mGhiRoBienChung
                            }
                        ]
                    }
                ]
            }
        ],
        "relationships": [],
        "attributes": [
            {
                "attribute": "JHb1hzseNMg",
                "value": mCMT
            },
            {
                "attribute": "xBoLC0aruyJ",
                "value": mFullName
            },
            {
                "attribute": "rwreLO34Xg7",
                "value": mSex
            },
            {
                "attribute": "C7USC9MC8yH",
                "value": mBirthDay
            }
        ]
    }
    resultTei.trackedEntityInstances.push(mTei)
}
_writeJsonFile('tei-tamthan.json', resultTei)


function getRandomIntStart0(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    start = "0"
    result = start.concat(Math.floor(Math.random() * (max - min + 1)) + min)
    return result.slice(-2)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundInt(value){
    if (value == 0) {
        return value = `01`;
    }
    if (value < 10) {
        if(value < 0){
            value = value*(-1);
            value = `0${value}`
            return value.slice(-2)    
        }
        value = `0${value}`;
        return value.slice(-2)
    }
    return value;
}
// function writeFile(teiId, uId, orgId, mCMT, mFullName, mBirthDay, mSex, mAddress) {
//     teiInfo = `INSERT INTO public.trackedentityinstance (trackedentityinstanceid, uid, code, created, lastupdated, lastupdatedby, createdatclient, lastupdatedatclient, inactive, deleted, lastsynchronized, featuretype, coordinates, organisationunitid, trackedentitytypeid, geometry, storedby) VALUES (${teiId}, '${uId}', null, '2021-07-11 01:11:25.342000', '2021-07-11 01:11:25.342000', 598, '2021-07-11 01:11:25.342000', '2021-07-11 01:11:25.342000', false, false, '1970-01-01 00:00:00.000000', null, null, ${orgId}, 381, null, 'duylp');
//     INSERT INTO public.trackedentityattributevalue (trackedentityinstanceid, trackedentityattributeid, created, lastupdated, value, encryptedvalue, storedby) VALUES (${teiId}, 357, '2021-05-24T00:31:15.976Z', '2021-05-24T00:31:15.977Z', ${mCMT}, null, 'duylp');
//     INSERT INTO public.trackedentityattributevalue (trackedentityinstanceid, trackedentityattributeid, created, lastupdated, value, encryptedvalue, storedby) VALUES (${teiId}, 358, '2021-05-24T00:31:15.976Z', '2021-05-24T00:31:15.977Z', '${mFullName}', null, 'duylp');
//     INSERT INTO public.trackedentityattributevalue (trackedentityinstanceid, trackedentityattributeid, created, lastupdated, value, encryptedvalue, storedby) VALUES (${teiId}, 359, '2021-05-24T00:31:15.976Z', '2021-05-24T00:31:15.977Z', '${mSex}', null, 'duylp');
//     INSERT INTO public.trackedentityattributevalue (trackedentityinstanceid, trackedentityattributeid, created, lastupdated, value, encryptedvalue, storedby) VALUES (${teiId}, 363, '2021-05-24T00:31:15.976Z', '2021-05-24T00:31:15.977Z', '${mBirthDay}', null, 'duylp');
//     INSERT INTO public.trackedentityattributevalue (trackedentityinstanceid, trackedentityattributeid, created, lastupdated, value, encryptedvalue, storedby) VALUES (${teiId}, 364, '2021-05-24T00:31:15.976Z', '2021-05-24T00:31:15.977Z', '${mAddress}', null, 'duylp'); \n`
//     fs.appendFile('importTei.txt', teiInfo, function (err) {
//         if (err) throw err;
//         console.log('Exported!');
//     })
// }