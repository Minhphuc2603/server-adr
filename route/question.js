import express from 'express';
import Question from '../models/question.js';

const questionRouter = express.Router();

questionRouter.get('/:category', async (req, res) => {
    try {
        const { category } = req.params;
        console.log(category)
        const questionsByCategory = await Question.find({ category: category });
        res.status(200).json(questionsByCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

questionRouter.get('/topic/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const questionsByTopic = await Question.find({ topic: id });
        res.status(200).json(questionsByTopic);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

questionRouter.post('/', async (req, res) => {
    try {
        const requestData = [
            {
                "question": "Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì?",
                "answers": [
                    {
                        "text": "Phần mặt đường và lề đường",
                        "isCorrect": false
                    },
                    {
                        "text": "Phần đường xe chạy",
                        "isCorrect": true
                    },
                    {
                        "text": "Phần đường xe cơ giới",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 1
            },
            {
                "question": "Biển báo hiệu có dạng hình tròn, viền đỏ, nền trắng, trên nền có hình vẽ hoặc chữ số, chữ viết màu đen là loại biển gì dưới đây?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-05%20at%2014.51.28.png?alt=media&token=c3bfa15d-ecad-4057-8be8-cc5a5f0d4efd",
                "answers": [
                    {
                        "text": "Biển báo nguy hiểm",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển báo cấm",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển báo hiệu lệnh",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển báo chỉ dẫn",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 1
            },
            {
                "question": "Biển báo hiệu có dạng tam giác đều, viền đỏ, nền màu vàng, trên nền có hình vẽ màu đen là loại biển gì dưới đây?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2017.55.29.png?alt=media&token=fb46fb1d-dc20-415a-a0b0-943823f2581b",
                "answers": [
                    {
                        "text": "Biển báo nguy hiểm",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển báo cấm",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển báo hiệu lệnh",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển báo chỉ dẫn",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 1
            },
            {
                "question": "Biển báo hiệu hình tròn, có nền xanh lam, có hình vẽ màu trắng là loại biển gì dưới đây?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2017.57.21.png?alt=media&token=1e6d2fe7-a37d-4994-914f-8e7be178d4e6",
                "answers": [
                    {
                        "text": "Biển báo chỉ dẫn",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển báo nguy hiểm",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển báo cấm",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển báo hiệu lệnh phải thi hành",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 1
            },
            {
                "question": "Biển báo hiệu hình chữ nhật hoặc hình vuông hoặc hình mũi tên nền xanh lam là loại biển gì dưới đây?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2017.59.01.png?alt=media&token=378ffcf6-3659-45a1-8a07-7e7ae5d5df55",
                "answers": [
                    {
                        "text": "Biển báo nguy hiểm",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển báo cấm",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển báo hiệu lệnh phải thi hành",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển báo chỉ dẫn",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 1
            },
            {
                "question": "Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2018.02.35.png?alt=media&token=9ae55362-c2b8-4386-b8a3-e72467e6143e",
                "answers": [
                    {
                        "text": "Người tham gia giao thông ở các hướng phải dừng lại.",
                        "isCorrect": false
                    },
                    {
                        "text": "Người tham gia giao thông ở các hướng được đi theo chiều gậy chỉ của cảnh sát giao thông.",
                        "isCorrect": false
                    },
                    {
                        "text": "Người tham gia giao thông ở phía trước và phía sau người điều khiển được đi tất cả các hướng; người tham gia giao thông ở phía bên phải và phía bên trái người điều khiển phải dừng lại.",
                        "isCorrect": false
                    },
                    {
                        "text": "Người tham gia giao thông ở phía trước và phía sau người điều khiển phải dừng lại; người tham gia giao thông ở phía bên phải và phía bên trái người điều khiển được đi tất cả các hướng.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 1
            },
            {
                "question": "Khi gặp hiệu lệnh như dưới đây của cảnh sát giao thông thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2018.05.33.png?alt=media&token=d866c190-9270-45d2-90cd-39a2fd636a31",
                "answers": [
                    {
                        "text": "Người tham gia giao thông ở các hướng đối diện cảnh sát giao thông được đi, các hướng khác cần phải dừng lại.",
                        "isCorrect": false
                    },
                    {
                        "text": "Người tham gia giao thông được rẽ phải theo chiều mũi tên màu xanh ở bục cảnh sát giao thông.",
                        "isCorrect": false
                    },
                    {
                        "text": "Người tham gia giao thông ở các hướng đều phải dừng lại trừ các xe đã ở trong khu vực giao nhau.",
                        "isCorrect": true
                    },
                    {
                        "text": "Người ở hướng đối diện cảnh sát giao thông phải dừng lại, các hướng khác được đi trong đó có bạn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 1
            },
            {
                "question": "'Làn đường' là gì?",
                "answers": [
                    {
                        "text": "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn",
                        "isCorrect": false
                    },
                    {
                        "text": "Là một phần của phần đường xe chạy được chai theo chiều dọc của đường, sử dụng cho xe chạy.",
                        "isCorrect": true
                    },
                    {
                        "text": "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ bề rộng cho xe ô tô chạy an toàn",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 1
            },
            {
                "question": "Khái niệm “khổ giới hạn đường bộ” được hiểu như thế nào là đúng?",
                "answers": [
                    {
                        "text": "Là khoảng trống có kích thước giới hạn về chiều cao, chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
                        "isCorrect": true
                    },
                    {
                        "text": "Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe được đi qua an toàn",
                        "isCorrect": false
                    },
                    {
                        "text": "Là khoảng trống có kích thước giới hạn về chiều cao của đường, cầu, bến phà, hầm trên đường bộ để các xe được đi qua an toàn",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 1
            },
            {
                "question": "Trong các khái niệm dưới đây, “dải phân cách” được hiểu như thế nào là đúng?",
                "answers": [
                    {
                        "text": "Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép",
                        "isCorrect": false
                    },
                    {
                        "text": "Là bộ phận duong để phân tách phần đường xe chạy và hành lang an toàn giao thông.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 1
            },
            {
                "question": "“Dải phân cách” trên đường bộ gồm những loại nào?",
                "answers": [
                    {
                        "text": "Dải phân cách gồm loại cố định và loại di động",
                        "isCorrect": true
                    },
                    {
                        "text": "Dải phân cách gồm tường chống ồn, hộ lan cứng và hộ lan mềm",
                        "isCorrect": false
                    },
                    {
                        "text": "Dải phân cách gồm giá long môn và biển báo hiệu đường bộ",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 2
            },
            {
                "question": "Người lái xe được hiểu như thế nào trong các khái niệm dưới đây",
                "answers": [
                    {
                        "text": "Là người điều khiển xe cơ giới",
                        "isCorrect": true
                    },
                    {
                        "text": "LÀ người điều khiển xe thô sơ",
                        "isCorrect": false
                    },
                    {
                        "text": "LÀ người điều khiển xe có súc vật kéo",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 2
            },
            {
                "question": "Đường mà trên đó phương tiện tham gia giao thông được các phương tiện giao thông được các phương tiện giao thông đến từ hướng khác nhường đường khi qua nơi đường giao nhau, được cắm biển báo hiệu đường ưu tiên là loại đường gì?",
                "answers": [
                    {
                        "text": "Đường ưu tiên",
                        "isCorrect": true
                    },
                    {
                        "text": "Đường không ưu tiên",
                        "isCorrect": false
                    },
                    {
                        "text": "Đường tỉnh lộ",
                        "isCorrect": false
                    },
                    {
                        "text": "Đường quốc lộ",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 2
            },
            {
                "question": "Khai niệm “phương tiện giao thông cơ giới đường bộ” được hiểu thế nào là đúng?",
                "answers": [
                    {
                        "text": "Gồm ô tô, máy kéo, xe mô tô hai bánh, xe mô to ba bánh, xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng",
                        "isCorrect": false
                    },
                    {
                        "text": "Gồm xe ô tô; máy kéo; rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo; xe mô tô hai bánh; xe mô tô ba bánh, xe gắn máy(kể cả xe máy điện) và các loại xe tương tự.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 2
            },
            {
                "question": "Khái niệm “phương tiện giao thông thô sơ đường bộ” được hiểu thế nào là đúng?",
                "answers": [
                    {
                        "text": "Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe xích lô, xe lăn dùng cho người khuyết tật, xe súc vật kéo và các loại xe tương tự",
                        "isCorrect": true
                    },
                    {
                        "text": "Gồm xe đạp(kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 2
            },
            {
                "question": "“ Phương tiện tham gia giao thông đường bộ” gồm những loại nào?",
                "answers": [
                    {
                        "text": "Phương tiện giao thông cơ giới đường bộ",
                        "isCorrect": false
                    },
                    {
                        "text": "Phương tiện giao thông thô sơ đường bộ và xe máy chuyên dùng",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và 2",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 2
            },
            {
                "question": "“Người tham gia giao thông đường bộ” Gồm những đối tượng nào?",
                "answers": [
                    {
                        "text": "Người điều khiển, người sử dụng phương tiện tham giao giao thông đường bộ",
                        "isCorrect": false
                    },
                    {
                        "text": "Người điều khiển, dẫn dắt súc vật, người đi bộ trên đường",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 2
            },
            {
                "question": "“Người điều khiển phương tiện tham gia giao thông đường bộ” gồm những đối tượng nào dưới đây?",
                "answers": [
                    {
                        "text": "Người điều khiển xe cơ giới, người điều khiển xe thô sơ",
                        "isCorrect": false
                    },
                    {
                        "text": "Người điều khiển xe máy chuyên dùng tham gia giao thông đường bộ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 2
            },
            {
                "question": "Khai niệm “người điều khiển giao thông” được hiểu như thế nào đúng?",
                "answers": [
                    {
                        "text": "Là cảnh sát giao thông, người được giao nhiệm vụ hướng dẫn giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt",
                        "isCorrect": true
                    },
                    {
                        "text": "Là người tham gia giao thông tại nơi thi công, nơi ùn tắt giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt",
                        "isCorrect": false
                    },
                    {
                        "text": "Là người điều khiển phương tiện tham gia giao thông tại nơi thi công, nơi ùn tắc giao thông, ở bến phà, tại cầu đường bộ đi chung với đường sắt.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 2
            },
            {
                "question": "Trong các khái niệm dưới đây khái niệm “dừng xe” được hiểu như thế nào là đúng?",
                "answers": [
                    {
                        "text": "Là trạng thái đừng yên của phương tiện giao thông không giới hạn thời gian để cho người lên xuống phương tiện, xếp dỡ hàng hóa hoặc thực hiện công việc khác",
                        "isCorrect": false
                    },
                    {
                        "text": "Là trạng thai đứng yên tạm thời của phương tiện giao thông trong một khoảng thời gian cần đủ để cho người lên, xuống phương tiện, xếp dỡ hàng hóa hoặc thực hiện công việc",
                        "isCorrect": true
                    },
                    {
                        "text": "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian giữa 02 lần vận chuyển hàng hóa hoặc hành khách",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 2
            },
            {
                "question": "Khái niệm “đỗ xe” được hiểu như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Là trạng thái đứng yên của phương tiện giao thông có giới hạn trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện đó, xếp dỡ hàng hóa hoặc thực hiện công việc khác",
                        "isCorrect": false
                    },
                    {
                        "text": "Là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 3
            },
            {
                "question": "Khái niệm “đường cao tốc” được hiểu như thế nào là đúng?",
                "answers": [
                    {
                        "text": "Đường dành riêng cho xe ô tô và một số loại xe chuyên dùng được phép đi vào theo quy đinh của luật giao thông đường bộ",
                        "isCorrect": false
                    },
                    {
                        "text": "Có dải phân cách phân chia đường cho xe chạy hai chiều riêng biệt mà dải phân cách này xe không được đi lên trên; không giao nhau cùng mức với một hoặc một số đường khác",
                        "isCorrect": false
                    },
                    {
                        "text": "Đường bố trí đầy đủ trang thiết bị phục vụ, bảo đảo giao thông liên tục, an toàn, rút ngắn thời gian hành trình và chỉ cho xe ra, vào ở những điểm nhất định",
                        "isCorrect": false
                    },
                    {
                        "text": "Tất cả các ý trên",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 3
            },
            {
                "question": "Hành vi nào dưới đây bị nghiêm cấm?",
                "answers": [
                    {
                        "text": "Đỗ xe trên đường phố",
                        "isCorrect": false
                    },
                    {
                        "text": "Sử dụng xe đạp đi trên các tuyến quốc lộ có tốc độ cao",
                        "isCorrect": false
                    },
                    {
                        "text": "Làm hỏng (cố ý) cọc tiêu, giương cầu, dải phân cách",
                        "isCorrect": true
                    },
                    {
                        "text": "Sử dụng còi và quay đầu xe trong khu dân cư",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 3
            },
            {
                "question": "Hành vi đưa xe cơ giới, xe máy chuyên dùng không bảo đảm tiêu chuẩn an toàn kỹ thuật và bảo vệ môi trường vào tham gia giao thông đường bộ có bị nghiêm cấm hay không?",
                "answers": [
                    {
                        "text": "Không bị nghiêm cấm",
                        "isCorrect": false
                    },
                    {
                        "text": "Bị nghiêm cấm",
                        "isCorrect": true
                    },
                    {
                        "text": "Bị nghiêm cấm tùy theo các tuyến đường",
                        "isCorrect": false
                    },
                    {
                        "text": "Bị nghiêm cấm tùy theo loại xe",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 3
            },
            {
                "question": "Cuộc đua xe chỉ được thực hiện khi nào?",
                "answers": [
                    {
                        "text": "Diễn ra trên đường phố không có người qua lại",
                        "isCorrect": false
                    },
                    {
                        "text": "Được người dân ủng hộ",
                        "isCorrect": false
                    },
                    {
                        "text": "Được cơ quan có thẩm quyền cấp phép",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 3
            },
            {
                "question": "Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy có bị nghiêm cấm hay không?",
                "answers": [
                    {
                        "text": "Bị nghiêm cấm",
                        "isCorrect": true
                    },
                    {
                        "text": "Không bị nghiêm cấm",
                        "isCorrect": false
                    },
                    {
                        "text": "Không bị nghiêm cấm, nếu có chất ma túy ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 3
            },
            {
                "question": " Việc lái xe mô tô, ô tô, máy kéo ngay sai khi uống rượu, bia có được phép không?",
                "answers": [
                    {
                        "text": "Không được phép",
                        "isCorrect": true
                    },
                    {
                        "text": "Chỉ được lái ở tốc độ chậm và quãng đường ngắn",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ được lái nếu trong cơ thể có nồng độ cồn thấp",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 3
            },
            {
                "question": " Người điều khiển ô tô, mô tô, máy kéo trên đường mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
                "answers": [
                    {
                        "text": "Bị nghiêm cấm",
                        "isCorrect": true
                    },
                    {
                        "text": "Không bị nghiêm cấm",
                        "isCorrect": false
                    },
                    {
                        "text": "Không bị nghiêm cấm nếu nồng độ cồn trong máu ở mức nhẹ có thể điều khiển được phương tiện giao thông",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 3
            },
            {
                "question": "Sử dụng rượu, bia khi lái xe, nếu bị phát hiện thì bị xử lý như thế nào?",
                "answers": [
                    {
                        "text": "Chỉ bị nhắc nhở",
                        "isCorrect": false
                    },
                    {
                        "text": "Bị xử phạt hành chính hoặc có thể bị xử lý hình sự tùy theo mức độ vi phạm",
                        "isCorrect": true
                    },
                    {
                        "text": "Không bị xử lý hình sự",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 3
            },
            {
                "question": "Theo luật phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu bia khi tham gia giao thông?",
                "answers": [
                    {
                        "text": "Người điều khiển: Xe ô tô, Xe mô tô, xe đạp, xe gắn máy",
                        "isCorrect": true
                    },
                    {
                        "text": "Người ngồi phía sau người điều khiển xe cơ giới",
                        "isCorrect": false
                    },
                    {
                        "text": "Người đi bộ",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 3
            },
            {
                "question": "Hành vi xe cơ giới, xe máy chuyên dùng cho người không đủ điều kiện để điều khiển xe tham gia giao thông có được phép hay không?",
                "answers": [
                    {
                        "text": "Chỉ được thực hiện nếu đã hướng dẫn đầy đủ",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép",
                        "isCorrect": true
                    },
                    {
                        "text": "Được phép tùy từng trường hợp",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ được phép thực hiện với thành viên trong gia đình",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 4
            },
            {
                "question": "Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có nghiêm cấm hay không?",
                "answers": [
                    {
                        "text": "Bị nghiêm cấm tùy từng trường hợp",
                        "isCorrect": false
                    },
                    {
                        "text": "Không bị nghiêm cấm",
                        "isCorrect": false
                    },
                    {
                        "text": "Bị nghiêm cấm",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 4
            },
            {
                "question": "Khi lái xe trên đường, người lái xe cần quan sát và bảo đảm tốc độ phương tiện như thế nào?",
                "answers": [
                    {
                        "text": "Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ lớn hơn tốc độ tối đa cho phép vào ban đêm",
                        "isCorrect": false
                    },
                    {
                        "text": "Không vượt quá tốc độ cho phép",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 4
            },
            {
                "question": "Phương tiện giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?",
                "answers": [
                    {
                        "text": "Đi về phía bên trái",
                        "isCorrect": false
                    },
                    {
                        "text": "Đi về phía bên phải",
                        "isCorrect": true
                    },
                    {
                        "text": "Đi ở giữa",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 4
            },
            {
                "question": "Trên đường có nhiều làn đường, khi điều khiển phương tiện ở tốc độ chậm bạn phải đi ở làn đường nào?",
                "answers": [
                    {
                        "text": "Đi ở làn đường phải trong cùng",
                        "isCorrect": true
                    },
                    {
                        "text": "Đi ở làn phái bên trái",
                        "isCorrect": false
                    },
                    {
                        "text": "Đi ở làn giữa",
                        "isCorrect": false
                    },
                    {
                        "text": "Đi ở bất cứ làn nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 4
            },
            {
                "question": "Hành vi vượt xe tại các vị trí có tầm nhìn hạn chế, đường vòng, đầu dóc có bị nghiêm cấm hay không?",
                "answers": [
                    {
                        "text": "Không bị nghiêm cấm",
                        "isCorrect": false
                    },
                    {
                        "text": "Không bị nghiêm cấm khi rất vội",
                        "isCorrect": false
                    },
                    {
                        "text": "Bị nghiêm cấm",
                        "isCorrect": true
                    },
                    {
                        "text": "Không bị nghiêm cấm khi khẩn cẩn",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 4
            },
            {
                "question": "Khi lái xe trong khu đô thị và đông dân cư trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi như thế nào trong các trường hợp dưới đây?",
                "answers": [
                    {
                        "text": "Từ 22 giờ đén 5 giờ sáng",
                        "isCorrect": false
                    },
                    {
                        "text": "Từ 5 giờ sáng đến 22 giờ",
                        "isCorrect": true
                    },
                    {
                        "text": "Từ 23 giờ đêm đến 5 giờ sáng hôm sau",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 4
            },
            {
                "question": "Người lái xe sử dụng đèn như thế nào khi lái xe trong khu đô thị và đông dân cư vào ban đêm?",
                "answers": [
                    {
                        "text": "Bất cứ đèn nào miễn là mắt nhìn rõ phía trước",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ bật đèn chiếu xa (đèn pha) khi không nhìn rõ đường",
                        "isCorrect": false
                    },
                    {
                        "text": "Đèn chiếu xa (đèn pha) khi đường vắng, đèn chiếu pha gần (đèn cốt) khi có xe đi ngược chiều.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đèn chiếu gần (đèn cốt)",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 4
            },
            {
                "question": "Hành vi lắp đặt, sử dụng còi, đèn không đúng thiết kế của nhà sản xuất đối với từng loại xe cơ giới có được phép hay không?",
                "answers": [
                    {
                        "text": "Được phép",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép",
                        "isCorrect": true
                    },
                    {
                        "text": "Được phép tùy theo trường hợp",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 4
            },
            {
                "question": "Trong trường hợp đặc biết, để được lắp đặt, sử dụng còi, đèn khác thiết kế của nhà sản xuất đối với từng loại xe cơ giới bạn phải đảm bảo yêu cầu nào dưới đây?",
                "answers": [
                    {
                        "text": "Phải đảm bảo phụ tùng do đúng nhà sản xuất đó cung cấp",
                        "isCorrect": false
                    },
                    {
                        "text": "Phải được chấp thuận của cơ quan có thẩm quyền",
                        "isCorrect": true
                    },
                    {
                        "text": "Phải là xe đăng ký và hoạt động tại các khu vực có địa hình phức tạp.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 4
            },
            {
                "question": "Việc sản xuất, mau bán, sử dụng biển số xe cơ giới, xe máy chuyên dùng được quy định như thế nào trong Luật Giao thông đường bộ?",
                "answers": [
                    {
                        "text": "Được phép sản xuất, sử dụng khi bị mất biển số",
                        "isCorrect": false
                    },
                    {
                        "text": "Được phép mua bán, sử dụng khi bị mất biển số",
                        "isCorrect": false
                    },
                    {
                        "text": "Nghiêm cấm sản xuất, mua bán sử dụng trái phép",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 5
            },
            {
                "question": "Người lái xe không được vượt xe khác khi gặp trường hợp nào ghi ở dưới đây?",
                "answers": [
                    {
                        "text": "Trên cầu hẹp có một làn xe. Nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; xe được quyền ưu tiên đang phát tín hiệu ưu tiên đi làm nhiệm vụ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Trên cầu có từ 02 làn xe trở lên; nơi đường bộ giao nhau không cùng mức với đường sắt; xe được quyền ưu tiên đang đi phía trước nhưng không phát tín hiệu ưu tiên.",
                        "isCorrect": false
                    },
                    {
                        "text": "Trên đường có 2 làn đường được phân chia làn bằng vạch kẻ nét đứt.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 5
            },
            {
                "question": "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt có được quay đầu xe hay không?",
                "answers": [
                    {
                        "text": "Được phép",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép",
                        "isCorrect": true
                    },
                    {
                        "text": "Tùy từng trường hợp",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 5
            },
            {
                "question": "Bạn đang lái xe phía trước có một xe cảnh sát giao thông không phát tín hiệu ưu tiên bạn có được phép vượt hay không?",
                "answers": [
                    {
                        "text": "Không được phép",
                        "isCorrect": false
                    },
                    {
                        "text": "Được vượt khi đang trên cầu",
                        "isCorrect": false
                    },
                    {
                        "text": "Được phép vượt khi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông",
                        "isCorrect": false
                    },
                    {
                        "text": "Được vượt khi đảm bảo an toàn",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 5
            },
            {
                "question": "Bạn đang lái xe phía trước có một xe cứu thương đang phát tín hiệu ưu tiên có được phép vượt hay không?",
                "answers": [
                    {
                        "text": "Không được vượt",
                        "isCorrect": true
                    },
                    {
                        "text": "Được vượt khi đang trên cầu",
                        "isCorrect": false
                    },
                    {
                        "text": "Được phép vượt khi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông",
                        "isCorrect": false
                    },
                    {
                        "text": "Được vượt khi đảm bảo an toàn",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 5
            },
            {
                "question": "Người lái xe không được quay đầu xe trong các trường hợp nào dưới đây?",
                "answers": [
                    {
                        "text": "Ở phần đường dành cho người đi bọ qua đường, trên cầu, đầu cầu, đường cao tốc, đường hẹp, đường dốc, tại nơi đường bộ giao nhau cùng mức với đường sắt",
                        "isCorrect": true
                    },
                    {
                        "text": "Ở phía trước hoặc phía sau của phần đường dành cho người đi bộ qua đường, trên đường quốc lộ, tại nơi đường bộ giao giao nhau không cùng mức với đường sắt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 5
            },
            {
                "question": "Bạn đang lái xe trong khu dân cư, có đông xe qua lại, nếu muốn quay đầu xe bạn cần làm gì để tránh lại, nếu muốn quay đầu xe bạn cần làm gì để tránh ùn tắc và đảm bảo an toàn giao thông?",
                "answers": [
                    {
                        "text": "Đi tiếp đến điểm giao cắt gần nhất hoặc nơi có biển báo cho phép quay đầu xe",
                        "isCorrect": true
                    },
                    {
                        "text": "Bấm đèn khẩn cấp và quay đầu xe từ từ bảo đảm an toàn",
                        "isCorrect": false
                    },
                    {
                        "text": "Bấm còi liên tục khi quay đầu xe để cảnh báo các xe khác",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhờ một người ra hiệu giao thông trên đường Chậm lại trước khi quay đầu xe",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 5
            },
            {
                "question": "Người lái xe không được lùi xe ở những khu vực nào dưới đây?",
                "answers": [
                    {
                        "text": "Ở khu vực cho phép đỗ xe",
                        "isCorrect": false
                    },
                    {
                        "text": "Ở khu vực cấm dừng và trên phần đường dành cho người đi bộ qua đường",
                        "isCorrect": false
                    },
                    {
                        "text": "Nơi đường bộ giao nhau, đường bộ giao nhau cùng mức với đường sắt, nơi tầm nhìn bị che khuất, trong hầm đường bộ, đường cao tốc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 2 và ý 3 ",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 5
            },
            {
                "question": "Người điều khiển phương tiện giao thông trên đường phố có được dừng xe, đỗ xe trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước hay không?",
                "answers": [
                    {
                        "text": "Đường dừng xe, đỗ xe trong trường hợp cần thiết",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được dừng xe, đỗ xe",
                        "isCorrect": true
                    },
                    {
                        "text": "Được dừng xe, không được đỗ xe",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 5
            },
            {
                "question": "Khi xe đã kéo 1 xe hoặc xe đã kéo 1 rơ moóc, bạn có được phép kéo thêm xe (kể cả xe thô sơ) hoặc rơ moóc thứ hai hay không?",
                "answers": [
                    {
                        "text": "Không được phép",
                        "isCorrect": true
                    },
                    {
                        "text": "Chỉ được thực hiện trên đường quốc lộ có hai làn xe một chiều",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ được thực hiện trên đường cao tốc",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được thực hiện ban ngày",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369",
                "topic": 5
            },
            {
                "question": "Người điều khiển xe mô tô hai bánh, ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
                "answers": [
                    {
                        "text": "Được phép",
                        "isCorrect": false
                    },
                    {
                        "text": "Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình",
                        "isCorrect": false
                    },
                    {
                        "text": "Tùy trường hợp",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy có được phép không?",
                "answers": [
                    {
                        "text": "Được phép",
                        "isCorrect": false
                    },
                    {
                        "text": "Tùy trường hợp",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào không được phép?",
                "answers": [
                    {
                        "text": "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống của xe quệt xuống đường khi xe đang chạy",
                        "isCorrect": true
                    },
                    {
                        "text": "Buông một tay; sử dụng xe để chở người hoặc hàng hóa; để chân chạm xuống đất khi khởi hành",
                        "isCorrect": false
                    },
                    {
                        "text": "Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ",
                        "isCorrect": false
                    },
                    {
                        "text": "Chở người ngồi sau dưới 16 tuổi",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người ngồi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?",
                "answers": [
                    {
                        "text": "Không được mang vác",
                        "isCorrect": true
                    },
                    {
                        "text": "Được mang vác, tùy trường hợp cụ thể",
                        "isCorrect": false
                    },
                    {
                        "text": "Được mang, vác nhưng phải đảm bảo an toàn",
                        "isCorrect": false
                    },
                    {
                        "text": "Được mang vác tùy theo sức khỏe của bạn",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được bám, kéo hoặc đẩy các phương tiện khác không?",
                "answers": [
                    {
                        "text": "Không được phép",
                        "isCorrect": true
                    },
                    {
                        "text": "Được phép",
                        "isCorrect": false
                    },
                    {
                        "text": "Được bám trong trường hợp phương tiện của mình bị hỏng",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được sử dụng ô khi trời mưa hay không?",
                "answers": [
                    {
                        "text": "Được sử dụng",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ người ngồi sau được sử dụng",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được sử dụng",
                        "isCorrect": true
                    },
                    {
                        "text": "Được sử dụng nếu không có áo mưa",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi đang lên dốc người ngồi trên xe mô tô có được phép kéo theo người đang điều khiển xe đạp hay không?",
                "answers": [
                    {
                        "text": "Chỉ được phép nếu cả hai đội mũ bảo hiểm",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép",
                        "isCorrect": true
                    },
                    {
                        "text": "Chỉ được phép khi người đi xe đạp đã quá mệt",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ được phép khi trên đường thật vắng",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Hành vi sử dụng xe mô tô để kéo, đẩy xe mô tô khác bị hết xăng đến trạm mua xăng có được phép hay không?",
                "answers": [
                    {
                        "text": "Chỉ được kéo nếu đã nhìn thấy trạm xăng",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ được thực hiện trên đường vùng phương tiện cùng tham gia giao thông",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Hành vi vận chuyển đồ vật cồng kềnh bằng xe mô tô, xe gắn máy khi tham gia giao thông có được phép hay không?",
                "answers": [
                    {
                        "text": "Không được vận chuyển",
                        "isCorrect": true
                    },
                    {
                        "text": "Chỉ được vận chuyển khi đã chằng buộc cẩn thận",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ được vận chuyển vật cồng kềnh trên xe máy nếu khoảng cách về nhà ngắn hơn 2 km",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe ô tô tải, máy kéo có trọng tải từ 3.500kg trở lên; xe hạng B2 kéo rơ moóc(FB2)?",
                "answers": [
                    {
                        "text": "21 Tuổi",
                        "isCorrect": true
                    },
                    {
                        "text": "20 Tuổi",
                        "isCorrect": false
                    },
                    {
                        "text": "19 Tuổi",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người đủ bao nhiêu tuổi trở lên thì được điều khiển xe mô tô hai bánh, xe mô tô ba bánh có dung tích xi lanh từ 50 cm3 trở lên và các loại xe có kết cấu tương tự; xe ô tô tải, máy kéo có trọng tải dưới 3500kg; xe ô tô chở người đến 9 chỗ ngồi?",
                "answers": [
                    {
                        "text": "17 Tuổi",
                        "isCorrect": false
                    },
                    {
                        "text": "18 Tuổi",
                        "isCorrect": true
                    },
                    {
                        "text": "16 Tuổi",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người lái xe ô tô chở người trên 30 chỗ ngồi (hạng E), lái xe hạng D kéo rơ Moóc (FD) phải đủ bao nhiêu tuổi trở lên?",
                "answers": [
                    {
                        "text": "23 Tuổi",
                        "isCorrect": false
                    },
                    {
                        "text": "24 Tuổi",
                        "isCorrect": false
                    },
                    {
                        "text": "27 Tuổi",
                        "isCorrect": true
                    },
                    {
                        "text": "30 Tuổi",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Tuổi tối đa cửa người lái xe ô tô chở người trên 30 chỗ ngồi (hạng E) là bao nhiêu tuổi?",
                "answers": [
                    {
                        "text": "55 tuổi đối với nam và 50 tuổi đối với nữ",
                        "isCorrect": true
                    },
                    {
                        "text": "55 tuổi đối với nam và nữ",
                        "isCorrect": false
                    },
                    {
                        "text": "60 tuổi đối với nam và 55 tuổi đối với nữ",
                        "isCorrect": false
                    },
                    {
                        "text": "45 tuổi với nam và 40 tuổi đối với nữ",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người lái xe chở từ 10 đến 30 chỗ ngồi (hạng D), lái xe hạng C kéo rơ Moóc(FC) phải đủ bao nhiêu tuổi trở lên?",
                "answers": [
                    {
                        "text": "23 Tuổi",
                        "isCorrect": false
                    },
                    {
                        "text": "24 tuổi",
                        "isCorrect": true
                    },
                    {
                        "text": "22 tuổi",
                        "isCorrect": false
                    },
                    {
                        "text": "18 tuổi",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người đủ 16 tuổi được điều khiển các loại xe nào dưới Đây?",
                "answers": [
                    {
                        "text": "Xe mô tô 2 bánh có dung tích xi-lanh từ 50 cm3 trở lên",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe gắn máy có dung tích xi-lanh dưới 50cm3",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe ô tô tải dưới 3.500kg; xe chở người đến 9 chỗ ngồi",
                        "isCorrect": false
                    },
                    {
                        "text": "Tất cả các ý nêu trên",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người có giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
                "answers": [
                    {
                        "text": "Xe mô tô có dung tích xi-lanh 125 cm3",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe mô tô có dung tích xi-lanh từ 175 cm3 trở lên",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe mô tô có dung tích xi-lanh 100 cm3",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người có giấy phép lái xe mô tô hạng A1 được phép điều khiển các loại xe nào dưới đây?",
                "answers": [
                    {
                        "text": "Xe mô tô có dung tích xi-lanh từ 50 Cm3 đến dưới 175 cm3",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe mô tô ba bánh dành cho người khuyết tật",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người có giấy phép lái xe mô tô hạng A2 được phép điều khiển loại xe nào dưới đây?",
                "answers": [
                    {
                        "text": "Xe mô tô ba bánh",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe mô tô hai bánh có dung tích xi-lanh từ 175 cm3 trở lên và các loại xe quy định cho giấy phép lái xe hạng A1",
                        "isCorrect": true
                    },
                    {
                        "text": "Các loại máy kéo nhỏ có trọng tải đến 1000",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người có giấy phép lái xe mô tô hạng A3 được phép điều khiển loại xe nào dưới đây?",
                "answers": [
                    {
                        "text": "Xe mô tô ba bánh",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe mô tô hai bánh có dung tích xi lanh từ 175 Cm3 trở lên",
                        "isCorrect": false
                    },
                    {
                        "text": "Các loại máy kéo nhỏ có trọng tải đến 1.000 kg",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người có giấy phép lái xe hạng B1 số tự động được điều khiển loại xe nào?",
                "answers": [
                    {
                        "text": "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật. Không được hành nghề lái xe.",
                        "isCorrect": true
                    },
                    {
                        "text": "Ô tô số tự động chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật. Được hành nghề lái xe kinh doanh vận tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500 kg; ô tô dùng cho người khuyết tật.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người có giấy phép lái xe hạng B1 được điều khiển loại xe nào?",
                "answers": [
                    {
                        "text": "Ô tô chỏ người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500kg; máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3.500 kg. Được hành nghề lái xe",
                        "isCorrect": false
                    },
                    {
                        "text": "Ô tô chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tải, kể cả ô tô tải chuyên dùng có trọng tải thiết kế dưới 3.500kg; máy kéo kéo một rơ moóc có trọng tải thiết kế dưới 3.500 kg. Khong hành nghề lái xe",
                        "isCorrect": true
                    },
                    {
                        "text": "Ô tô số tự đọng chở người đến 9 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; ô tô tả, kể cả ô tô tải chuyên dùng số tự động có trọng tải thiết kế trên 3.500 kg; ô tô dùng cho người khuyết tật.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người có giấy phép lái xe hạng B2 được điều khiển loại xe nào?",
                "answers": [
                    {
                        "text": "Xe ô tô chở người từ 10 đến 30 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500kg",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải dưới 3.500kg",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe ô tô chở người trên 9 chỗ ngồi; xe ô tô tải; xe kéo có trọng tải trên 3.500kg",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người có giấy phép lái xe hạng C được điều khiển loại xe nào?",
                "answers": [
                    {
                        "text": "Xe ô tô chở người từ 10 đến 30 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500kg",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe ô tô chở người trên 9 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500kg",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe ô tô chở người đến 9 chỗ ngồi; xe ô tô tải; máy kéo có trọng tải trên 3.500kg",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người có giấy phép lái xe hạng D được điều khiển loại xe nào dưới đây?",
                "answers": [
                    {
                        "text": "Xe ô tô chở người trên 30 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500kg",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe ô tô chở người đến 30 chỗ ngồi, kể cả chỗ ngồi cho người lái xe; xe ô tô tải, máy kéo có trọng tải 3.500kg",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và điều khiển các loại xe quy định cho giấy phép lái xe hạng B1, B2, C và FB2",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người có giấy pháp lái xe hạng E được điều khiển loại xe nào dưới đây?",
                "answers": [
                    {
                        "text": "Xe kéo rơ Moóc, ô tô đầu kéo kéo sơ mi và rơ moóc và được điều khiển các loại xe theo quy định cho giấy phép lái xe hạng B1, B2, C và FB2",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe ô tô chở người trên 20 chỗ ngồi; xe ô tô tải, máy kéo có trọng tải trên 3.500 kg",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe kéo rơ mo óc và được điều khiển các loại xe; ô tô chở khách nối toa và các loại xe quy định cho giấy phép lái xe hạng B1, B2, C, D, FB2, FD",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người có giấy phép lái xe hạng FC được điều khiển loại xe nào dưới đây?",
                "answers": [
                    {
                        "text": "Các loại xe được quy định tại giấy phép lái xe hạng C có kéo rơ mooc, ô tô đầu kéo kéo sơ mi, rơ moóc và được điều khiển các loại xe quy định cho giấy phép hạng B1, B2 và FB2",
                        "isCorrect": false
                    },
                    {
                        "text": "Các loại xe được quy định tại giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo sơ mi rơ moóc, ô tô chở khách nối toa và được điều khiển các loại xe quy định cho giấy phép láu xe hạng B1, B2 và FB2",
                        "isCorrect": true
                    },
                    {
                        "text": "Mô tô hai bánh, các loại xe được quy định tại giấy phép lái xe hạng C có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe quy định cho giấy phép lái xe hạng B1, B2 và FB2",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người có giấy phép lái xe hạng FE được điều khiển loại xe nào dưới đây?",
                "answers": [
                    {
                        "text": "Các loại xe được quy định tại giấy phép lái xe hạng E có kéo rơ moóc và được điều khiển các loại xe: Ô tô chở khách nối toa và các loại xe quy định cho giấy phép lái xe hạng B1, B2, C, D, FB2, FD",
                        "isCorrect": true
                    },
                    {
                        "text": "Các loại xe được quy định tại giấy phép lái xe hạng E có kéo rơ moóc, ô tô đầu kéo kéo sơ mi rơ moóc và được điều khiển các loại xe: Ô tô chở khách nối toa và các loại xe quy định cho giấy phép lái xe hạng B1, B2, C, D, FB2, FD",
                        "isCorrect": false
                    },
                    {
                        "text": "Tất cả các loại xe nêu trên",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi tập lái xe ô tô, người tập lái xe phải thực hiện các điều kiện gì dưới đây?",
                "answers": [
                    {
                        "text": "Phải thực hành lái xe trên xe tập lái và có giáo viên bảo trợ tay lái.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phải mang theo phù hiệu 'học viên tập lái xe'.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phải mang theo Giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường còn hiệu lực, Giấy phép vận chuyển (nếu loại xe đó cần phải có).",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi dạy thực hành lái xe, giáo viên phải mang theo các giấy tờ gì dưới đây?",
                "answers": [
                    {
                        "text": "Phải mang theo phù hiệu 'Giáo viên dạy lái xe', giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường còn hiệu lực, giấy phép xe tập lái do cơ quan có thẩm quyền cấp còn hiệu lực.",
                        "isCorrect": true
                    },
                    {
                        "text": "Phải mang theo phù hiệu 'Học viên tập lái xe' và kế hoạch học tập của khóa học.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phải mang theo giấy chứng nhận Giáo viên dạy thực hành lái xe, biên lai thu phí bảo trì đường bộ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Xe ô tô tập lái phải đảm bảo các điều kiện gì dưới đây?",
                "answers": [
                    {
                        "text": "Gắn 02 biển 'TẬP LÁI' trước và sau xe, có hệ thống phanh phụ được lắp đặt bảo đảm hiệu quả phanh, được bố trí bên ghế ngồi của giáo viên dạy thực hành lái xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe tập lái loại tải thùng có mui che mưa, che nắng, ghế ngồi cho học viên, có Giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường phương tiện giao thông cơ giới đường bộ còn hiệu lực.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Việc sát hạch cấp Giấy phép lái xe ô tô phải thực hiện ở đâu và như thế nào?",
                "answers": [
                    {
                        "text": "Tại các trung tâm sát hạch lái xe có đủ điều kiện hoạt động và phải bảo đảm công khai, minh bạch.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tại các cơ sở đào tạo lái xe có đủ điều kiện và phải bảo đảm công khai, minh bạch.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tại sân tập lái của cơ sở đào tạo lái xe và phải đảm bảo công khai, minh bạch.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi điều khiển xe chạy trên đường, người lái xe phải mang theo các loại giấy tờ gì?",
                "answers": [
                    {
                        "text": "Giấy chứng nhận tốt nghiệp khóa đào tạo của hạng xe đang điều khiển, đăng ký xe, giấy phép lưu hành xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giấy phép lái xe phù hợp với loại xe đó; lệnh vận chuyển, đăng ký xe, giấy chứng nhận kiểm tra chất lượng an toàn kỹ thuật và bảo vệ môi trường của xe cơ giới sau khi cải tạo; giấy phép vận chuyển (nếu loại xe đó cần phải có).",
                        "isCorrect": false
                    },
                    {
                        "text": "Giấy phép lái xe phù hợp với loại xe đó, đăng ký xe, giấy chứng nhận kiểm định kỹ thuật và bảo vệ môi trường, giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe cơ giới và giấy phép vận chuyển (nếu loại xe đó cần phải có), các giấy tờ phải còn giá trị sử dụng.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi sử dụng Giấy phép lái xe đã khai báo mất để điều khiển phương tiện cơ giới đường bộ, ngoài việc bị thu hồi Giấy phép lái xe, chịu trách nhiệm trước pháp luật, người lái xe không được cấp Giấy phép lái xe trong thời gian bao nhiêu năm?",
                "answers": [
                    {
                        "text": "02 năm.",
                        "isCorrect": false
                    },
                    {
                        "text": "03 năm.",
                        "isCorrect": false
                    },
                    {
                        "text": "05 năm.",
                        "isCorrect": true
                    },
                    {
                        "text": "04 năm.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường giao thông, khi hiệu lệnh của người điều khiển giao thông trái với hiệu lệnh của đèn hoặc biển báo hiệu thì người tham gia giao thông phải chấp hành theo hiệu lệnh nào?",
                "answers": [
                    {
                        "text": "Hiệu lệnh của người điều khiển giao thông.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hiệu lệnh của đèn điều khiển giao thông.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hiệu lệnh của biển báo hiệu đường bộ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Theo quyết định của người tham gia giao thông nhưng phải bảo đảm an toàn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Tại nơi có biển báo hiệu cố định lại có báo hiệu tạm thời thì người tham gia giao thông phải chấp hành hiệu lệnh của báo hiệu nào?",
                "answers": [
                    {
                        "text": "Biển báo hiệu cố định.",
                        "isCorrect": false
                    },
                    {
                        "text": "Báo hiệu tạm thời.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi như thế nào?",
                "answers": [
                    {
                        "text": "Cho xe đi trên bất kỳ làn đường nào hoặc giữa 02 làn đường nếu không có xe đi phía trước; khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn phải có tín hiệu báo trước và phải bảo đảm an toàn.",
                        "isCorrect": true
                    },
                    {
                        "text": "Phải cho xe đi trong một làn đường, khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ và xe cơ giới phải đi như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe thô sơ phải đi trên làn đường bên trái ngoài cùng; xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe thô sơ phải đi trên làn đường bên phải trong cùng; xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe thô sơ đi trên làn đường phù hợp không gây cản trở giao thông; xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Bạn đang lái xe trong khu vực đô thị từ 22 giờ đến 5 giờ sáng hôm sau và cần vượt một xe khác, bạn cần báo hiệu như thế nào để đảm bảo an toàn giao thông?",
                "answers": [
                    {
                        "text": "Phải báo hiệu bằng đèn hoặc còi.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ được báo hiệu bằng còi.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phải báo hiệu bằng cả còi và đèn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ được báo hiệu bằng đèn.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi điều khiển xe chạy trên đường biết có xe sau xin vượt nếu đủ điều kiện an toàn người lái xe phải làm gì?",
                "answers": [
                    {
                        "text": "Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe sau vượt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Người điều khiển phương tiện phía trước phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại cho xe sau vượt.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cho xe tránh về bên trái mình và ra hiệu cho xe sau vượt; nếu có chướng ngại vật phía trước hoặc thiếu điều kiện an toàn chưa cho vượt được phải ra hiệu cho xe sau biết; cấm gây trở ngại cho xe xin vượt.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trong khu dân cư, ở nơi nào cho phép người lái xe, người điều khiển xe máy chuyên dùng được quay đầu xe?",
                "answers": [
                    {
                        "text": "Ở nơi đường giao nhau và nơi có biển báo cho phép quay đầu xe.",
                        "isCorrect": true
                    },
                    {
                        "text": "Ở nơi có đường rộng để cho các loại xe chạy một chiều.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ở bất kỳ nơi nào.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người lái xe phải làm gì khi quay đầu xe trên cầu, đường ngầm hay khu vực đường bộ giao nhau cùng mức với đường sắt?",
                "answers": [
                    {
                        "text": "Không được quay đầu xe.",
                        "isCorrect": true
                    },
                    {
                        "text": "Lợi dụng chỗ rộng và phải có người làm tín hiệu sau xe để bảo đảm an toàn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Lợi dụng chỗ rộng có thể quay đầu được để quay đầu xe cho an toàn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi muốn chuyển hướng, người lái xe phải thực hiện như thế nào để đảm bảo an toàn giao thông?",
                "answers": [
                    {
                        "text": "Quan sát gương, ra tín hiệu, quan sát an toàn và chuyển hướng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Quan sát gương, giảm tốc độ, ra tín hiệu chuyển hướng, quan sát an toàn và chuyển hướng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Quan sát gương, tăng tốc độ, ra tín hiệu và chuyển hướng.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi lùi xe, người lái xe phải làm gì để bảo đảm an toàn?",
                "answers": [
                    {
                        "text": "Quan sát phía trước và cho lùi xe ở tốc độ chậm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Lợi dụng nơi đường giao nhau đủ chiều rộng để lùi.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phải quan sát phía sau, có tín hiệu cần thiết và chỉ khi nào thấy không nguy hiểm mới được lùi.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi bạn nhìn thấy đèn phía sau xe ô tô có màu sáng trắng, ô tô đó đang trong trạng thái như thế nào?",
                "answers": [
                    {
                        "text": "Đang phanh.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đang bật đèn sương mù.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đang chuẩn bị lùi hoặc đang lùi.",
                        "isCorrect": true
                    },
                    {
                        "text": "Đang bị hỏng động cơ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe kia đi.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe xuống dốc phải nhường đường cho xe đang lên dốc; xe nào có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật đi trước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe lên dốc phải nhường đường cho xe xuống dốc; xe nào không có chướng ngại vật phía trước phải nhường đường cho xe có chướng ngại vật đi trước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Bạn đang lái xe trên đường hẹp, xuống dốc và gặp một xe đang đi lên dốc, bạn cần làm gì?",
                "answers": [
                    {
                        "text": "Tiếp tục đi vì xe lên dốc phải nhường đường cho mình.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhường đường cho xe lên dốc.",
                        "isCorrect": true
                    },
                    {
                        "text": "Chỉ nhường đường khi xe lên dốc nháy đèn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải nhường đường như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Nhường đường cho xe đi ở bên phải mình tới.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhường đường cho xe đi ở bên trái mình tới.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Phải nhường đường cho xe đi đến từ bên phải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe báo hiệu xin đường trước, xe đó được đi trước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phải nhường đường cho xe đi đến từ bên trái.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đoạn đường bộ giao nhau cùng mức với đường sắt, cầu đường bộ đi chung với đường sắt thì loại phương tiện nào được quyền ưu tiên đi trước?",
                "answers": [
                    {
                        "text": "Phương tiện nào bên phải không vướng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phương tiện nào ra tín hiệu xin đường trước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phương tiện giao thông đường sắt.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Tại nơi đường bộ giao nhau cùng mức với đường sắt chỉ có đèn tín hiệu hoặc chuông báo hiệu, khi đèn tín hiệu màu đỏ đã bật sáng hoặc có tiếng chuông báo hiệu, người tham gia giao thông phải dừng lại ngay và giữ khoảng cách tối thiểu bao nhiêu mét tính từ ray gần nhất?",
                "answers": [
                    {
                        "text": "5 mét.",
                        "isCorrect": true
                    },
                    {
                        "text": "3 mét.",
                        "isCorrect": false
                    },
                    {
                        "text": "4 mét.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người lái xe phải làm gì khi điều khiển xe vào đường cao tốc?",
                "answers": [
                    {
                        "text": "Phải có tín hiệu xin vào và phải nhường đường cho xe đang chạy trên đường; khi thấy an toàn mới cho xe nhập vào dòng xe ở làn đường sát mép ngoài; nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi vào làn đường của đường cao tốc.",
                        "isCorrect": true
                    },
                    {
                        "text": "Phải có tín hiệu xin vào và phải nhanh chóng vượt xe đang chạy trên đường để nhập vào dòng xe ở làn đường sát mép ngoài; nếu có làn đường tăng tốc thì phải cho xe chạy qua làn đường đó để vào làn đường của đường cao tốc.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường cao tốc, người lái xe phải dừng xe, đỗ xe như thế nào để đảm bảo an toàn giao thông?",
                "answers": [
                    {
                        "text": "Không được dừng xe, đỗ xe hoặc chỉ được dừng xe, đỗ xe ở nơi đường rộng; nếu dừng, đỗ xe ở nơi đường hẹp phải sử dụng còi báo hiệu để người lái xe khác biết.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ được dừng xe, đỗ xe ở nơi quy định; trường hợp buộc phải dừng xe, đỗ xe không đúng nơi quy định thì người lái xe phải đưa xe ra khỏi phần đường xe chạy, nếu không thể được thì phải báo hiệu để người lái xe khác biết.",
                        "isCorrect": true
                    },
                    {
                        "text": "Chỉ được dừng xe, đỗ xe ở nơi đường rộng; trường hợp dừng xe, đỗ xe tại nơi đường hẹp phải đặt các chướng ngại vật trên đường để yêu cầu người lái xe khác giảm tốc độ để bảo đảm an toàn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Những trường hợp nào ghi ở dưới đây không được đi vào đường cao tốc trừ người, phương tiện, thiết bị phục vụ cho việc quản lý, bảo trì đường cao tốc?",
                "answers": [
                    {
                        "text": "Người đi bộ, xe thô sơ, xe gắn máy, xe mô tô và máy kéo; xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn 70km/h.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe mô tô và xe máy chuyên dùng có tốc độ thiết kế lớn hơn 70km/h.",
                        "isCorrect": false
                    },
                    {
                        "text": "Người đi bộ, xe thô sơ, xe gắn máy và xe ô tô.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?",
                "answers": [
                    {
                        "text": "Xe cơ giới, xe máy chuyên dùng phải bật đèn; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; chỉ được dừng xe, đỗ xe ở nơi quy định.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe cơ giới phải bật đèn ngay cả khi đường hầm sáng; phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe máy chuyên dùng phải bật đèn ngay cả khi đường hầm sáng; phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Xe quá tải trọng, quá khổ giới hạn tham gia giao thông cần tuân thủ quy định nào ghi ở dưới đây?",
                "answers": [
                    {
                        "text": "Phải được cơ quan quản lý đường bộ có thẩm quyền cấp phép và phải thực hiện các biện pháp bắt buộc để bảo vệ đường bộ, bảo đảm an toàn giao thông.",
                        "isCorrect": true
                    },
                    {
                        "text": "Chủ phương tiện và lái xe chỉ cần thực hiện biện pháp để hạn chế việc gây hư hại đường bộ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Được tham gia giao thông trên đường rộng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ được tham gia giao thông vào ban đêm.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Việc nối giữa xe kéo với xe được kéo trong trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì phải dùng cách nào?",
                "answers": [
                    {
                        "text": "Dùng dây cáp có độ dài 10 mét.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dùng dây cáp có độ dài 5 mét.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dùng thanh nối cứng.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Xe kéo rơ moóc khi tham gia giao thông phải tuân thủ điều kiện nào ghi ở dưới đây?",
                "answers": [
                    {
                        "text": "Phải có tổng tổng trọng lượng lớn hơn tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho rơ moóc.",
                        "isCorrect": true
                    },
                    {
                        "text": "Phải có tổng tổng trọng lượng tương đương tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho xe kéo rơ moóc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phải được lắp phanh phụ theo quy định để đảm bảo an toàn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Xe ô tô kéo xe khác thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Được kéo theo một xe ô tô hoặc một xe máy chuyên dùng khác khi xe này không tự chạy được và phải đảm bảo an toàn; xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Được kéo theo một xe ô tô và xe máy chuyên dùng khác khi xe này không tự chạy được và phải đảm bảo an toàn; xe được kéo phải có người ngồi trên xe để kịp thời phát tín hiệu các trường hợp mất an toàn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Được kéo theo một xe ô tô và xe máy chuyên dùng khác khi xe này không tự chạy được và hệ thống phanh bị hỏng, xe kéo nhau phải nối bằng dây cáp có độ dài phù hợp.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người ngồi trên xe mô tô 2 bánh, xe gắn máy phải đội mũ bảo hiểm có cài quai đúng quy cách khi nào?",
                "answers": [
                    {
                        "text": "Khi tham gia giao thông đường bộ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Chỉ khi đi trên đường chuyên dùng; đường cao tốc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi tham gia giao thông trên đường tỉnh lộ hoặc quốc lộ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người điều khiển xe mô tô hai bánh, xe gắn máy được phép chở tối đa 2 người trong những trường hợp nào?",
                "answers": [
                    {
                        "text": "Chở người bệnh đi cấp cứu; trẻ em dưới 14 tuổi.",
                        "isCorrect": false
                    },
                    {
                        "text": "Áp giải người có hành vi vi phạm pháp luật.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người điều khiển xe mô tô hai bánh, xe gắn máy không được thực hiện những hành vi nào dưới đây?",
                "answers": [
                    {
                        "text": "Đi vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính); đi xe dàn hàng ngang",
                        "isCorrect": true
                    },
                    {
                        "text": "Chở 02 người; trong đó, có người bệnh đi cấp cứu hoặc trẻ em dưới 14 tuổi; áp giải người có hành vi vi phạm pháp luật",
                        "isCorrect": false
                    },
                    {
                        "text": "Điều khiển phương tiện tham gia giao thông trên đường tỉnh lộ hoặc quốc lộ",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người điều khiển xe mô tô hai bánh, xe gắn máy có được đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác; sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính) hay không?",
                "answers": [
                    {
                        "text": "Được phép nhưng phải đảm bảo an toàn",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép",
                        "isCorrect": true
                    },
                    {
                        "text": "Được phép tùy từng hoàn cảnh, điều kiện cụ thể",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép (có thể dừng lại một cách an toàn) trong trường hợp nào dưới đây?",
                "answers": [
                    {
                        "text": "Khi có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; khi chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế; khi qua nơi đường giao nhau, nơi đường bộ giao nhau với đường sắt; đường vòng; đường có địa hình quanh co, đèo dốc",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi qua cầu, cống hẹp; khi lên gần đỉnh gồ, dân cư, khu vực đang thi công trên đường bộ; hiện trường xảy ra tai nạn giao thông",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi điều khiển xe vượt xe khác trên đường quốc lộ, đường cao tốc",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi gặp một đoàn xe, một đoàn xe tang hay gặp một đoàn người có tổ chức theo đội ngữ, người lái xe phải xử lý như thế nào?",
                "answers": [
                    {
                        "text": "Từ từ đi cắt qua đoàn người, đoàn xe",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được cắt ngang qua đoàn người, đoàn xe",
                        "isCorrect": true
                    },
                    {
                        "text": "Báo hiệu từ từ cho xe đi cắt qua đến bảo đảm an toàn",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Tại ngã ba hoặc ngã tư không có đảo an toàn, người lái xe phải nhường đường như thế nào là đúng trong các trường hợp dưới đây?",
                "answers": [
                    {
                        "text": "Nhường đường cho người đi bộ đang đi trên phần đường dành cho người đi bộ sang đường; nhường đường cho xe đi trên đường ưu tiên, đường chính từ bất kỳ hướng nào tới; nhường đường cho xe ưu tiên, xe đi từ bên phải đến.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhường đường cho người đi bộ đang đứng chờ đi qua phần đường dành cho người đi bộ sang đường; nhường đường cho xe đi trên đường ngược chiều, đường nhánh từ bất kỳ hướng nào tới; nhường đường cho xe đi từ bên trái đến.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không phải nhường đường.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi điều khiển xe cơ giới, người lái xe phải bật đèn tín hiệu báo rẽ trong trường hợp nào dưới đây?",
                "answers": [
                    {
                        "text": "Khi cho xe chạy thẳng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Trước khi thay đổi làn đường.",
                        "isCorrect": true
                    },
                    {
                        "text": "Sau khi thay đổi làn đường.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đoạn đường hai chiều không có giải phân cách giữa, người lái xe không được vượt xe khác trong các trường hợp nào dưới đây?",
                "answers": [
                    {
                        "text": "Xe bị vượt bất ngờ tăng tốc độ và cố tình không nhường đường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe bị vượt giảm tốc độ và nhường đường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phát hiện có xe đi ngược chiều.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi lái xe trên đường vắng mà cảm thấy buồn ngủ, người lái xe nên chọn cách xử lý như thế nào cho phù hợp?",
                "answers": [
                    {
                        "text": "Tăng tốc độ kết hợp với nghe nhạc và đi tiếp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Quan sát, dừng xe tại nơi quy định; nghỉ cho đến khi hết buồn ngủ và đi tiếp.",
                        "isCorrect": true
                    },
                    {
                        "text": "Sử dụng một ít rượu và bia để hết buồn ngủ và đi tiếp.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường cao tốc, người lái xe xử lý như thế nào khi đã vượt quá lối ra của đường định rẽ?",
                "answers": [
                    {
                        "text": "Quay xe, chạy trên lề đường bên phải và rẽ khỏi đường cao tốc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Lùi xe sát lề đường bên phải và rẽ khỏi đường cao tốc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tiếp tục chạy đến lối ra tiếp theo.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người lái xe mô tô xử lý như thế nào khi cho xe mô tô phía sau vượt?",
                "answers": [
                    {
                        "text": "Nếu đủ điều kiện an toàn, người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại đối với xe xin vượt.",
                        "isCorrect": true
                    },
                    {
                        "text": "Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nếu đủ điều kiện an toàn, người lái xe phải tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi xe ô tô bị hỏng tại vị trí giao nhau giữa đường bộ và đường sắt, người lái xe xử lý như thế nào?",
                "answers": [
                    {
                        "text": "Nhanh chóng đặt báo hiệu trên đường sắt cách tối thiểu 500 mét về hai phía để báo cho người điều khiển phương tiện đường sắt và tìm cách báo cho người quản lý đường sắt, nhà ga nơi gần nhất, đồng thời phải bằng mọi biện pháp nhanh chóng đưa ô tô hỏng ra khỏi phạm vi an toàn đường sắt.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhanh chóng đặt biển cảnh báo nguy hiểm tại vị trí xe ô tô bị hỏng để đoàn tàu dừng lại.",
                        "isCorrect": false
                    },
                    {
                        "text": "Liên hệ ngay với đơn vị cứu hộ để đưa ô tô hỏng ra khỏi phạm vi an toàn đường sắt.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trong các trường hợp dưới đây, để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?",
                "answers": [
                    {
                        "text": "Phải đội mũ bảo hiểm đạt chuẩn, có cài quai đúng quy cách, mặc quần áo gọn gàng; không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
                        "isCorrect": true
                    },
                    {
                        "text": "Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải đảm bảo an toàn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phải đội mũ bảo hiểm khi cảm thấy mất an toàn giao thông hoặc khi chuẩn bị di chuyển quãng đường xa.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Đường bộ trong khu vực đông dân cư gồm những đoạn đường nào dưới đây?",
                "answers": [
                    {
                        "text": "Là đoạn đường nằm trong khu công nghiệp có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới.",
                        "isCorrect": false
                    },
                    {
                        "text": "Là đoạn đường bộ nằm trong khu vực nội thành phố, nội thị xã, nội thị trấn và những đoạn đường có đông dân cư sinh sống sát dọc theo đường, có các hoạt động ảnh hưởng đến an toàn giao thông; được xác định bằng biển báo hiệu là đường khu đông dân cư.",
                        "isCorrect": true
                    },
                    {
                        "text": "Là đoạn đường bộ nằm ngoài khu vực nội thành phố, nội thị xã có đông người và phương tiện tham gia giao thông và được xác định cụ thể bằng biển chỉ dẫn địa giới.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Tốc độ tối đa cho phép đối với xe máy chuyên dùng, xe gắn máy (kể cả xe máy điện) và các loại xe tương tự trên đường bộ (trừ đường cao tốc) không được vượt qua bao nhiêu km/h?",
                "answers": [
                    {
                        "text": "50 km/h.",
                        "isCorrect": false
                    },
                    {
                        "text": "40 km/h.",
                        "isCorrect": true
                    },
                    {
                        "text": "60 km/h.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường đôi có dải phân cách giữa, xe mô tô hai bánh, ô tô chở người đến 30 chỗ tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?",
                "answers": [
                    {
                        "text": "60 km/h.",
                        "isCorrect": true
                    },
                    {
                        "text": "50 km/h.",
                        "isCorrect": false
                    },
                    {
                        "text": "40 km/h.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều không có dải phân cách giữa, xe mô tô hai bánh, ô tô chở người đến 30 chỗ tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?",
                "answers": [
                    {
                        "text": "60 km/h.",
                        "isCorrect": false
                    },
                    {
                        "text": "50 km/h.",
                        "isCorrect": true
                    },
                    {
                        "text": "40 km/h.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 50 km/h?",
                "answers": [
                    {
                        "text": "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe gắn máy, xe máy chuyên dùng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn cơ giới trở lên, loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
                "answers": [
                    {
                        "text": "Ô tô con, ô tô tải, ô tô chở người trên 30 chỗ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe gắn máy, xe máy chuyên dùng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường bộ (trừ đường cao tốc) ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa, loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 90 km/h?",
                "answers": [
                    {
                        "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3,5 tấn.",
                        "isCorrect": true
                    },
                    {
                        "text": "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, ô tô chuyên dùng, xe mô tô.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 80 km/h?",
                "answers": [
                    {
                        "text": "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, ô tô chuyên dùng, xe mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
                        "isCorrect": true
                    },
                    {
                        "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3,5 tấn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 70 km/h?",
                "answers": [
                    {
                        "text": "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, xe mô tô, ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông).",
                        "isCorrect": true
                    },
                    {
                        "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải đến 3,5 tấn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi có dải phân cách giữa (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
                "answers": [
                    {
                        "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ô tô xi téc.",
                        "isCorrect": true
                    },
                    {
                        "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3,5 tấn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 80 km/h?",
                "answers": [
                    {
                        "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3,5 tấn.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 70 km/h?",
                "answers": [
                    {
                        "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải nhỏ hơn hoặc bằng 3,5 tấn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 60 km/h?",
                "answers": [
                    {
                        "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ moóc, xe mô tô, ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông).",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều không có dải phân cách giữa; đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ tối đa cho phép là 50 km/h?",
                "answers": [
                    {
                        "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ô tô chở người trên 30 chỗ (trừ ô tô buýt), ô tô tải có trọng tải trên 3,5 tấn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ô tô kéo rơ moóc, ô tô kéo xe khác, ô tô trộn vữa, ô tô trộn bê tông, ô tô xi téc.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi tham gia giao thông trên đoạn đường không có biển báo 'Cự ly tối thiểu giữa hai xe', với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 60 km/h đến 80 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
                "answers": [
                    {
                        "text": "35 m.",
                        "isCorrect": false
                    },
                    {
                        "text": "55 m.",
                        "isCorrect": true
                    },
                    {
                        "text": "70 m.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi tham gia giao thông trên đoạn đường không có biển báo 'Cự ly tối thiểu giữa hai xe', với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 80 km/h đến 100 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
                "answers": [
                    {
                        "text": "35 m.",
                        "isCorrect": false
                    },
                    {
                        "text": "55 m.",
                        "isCorrect": false
                    },
                    {
                        "text": "70 m.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi tham gia giao thông trên đoạn đường không có biển báo 'Cự ly tối thiểu giữa hai xe', với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ từ trên 100 km/h đến 120 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
                "answers": [
                    {
                        "text": "55 m.",
                        "isCorrect": false
                    },
                    {
                        "text": "70 m.",
                        "isCorrect": false
                    },
                    {
                        "text": "100 m.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi điều khiển chạy với tốc độ dưới 60 km/h, để đảm bảo khoảng cách an toàn giữa hai xe, người lái xe phải điều khiển xe như thế nào?",
                "answers": [
                    {
                        "text": "Chủ động giữ khoảng cách an toàn phù hợp với xe chạy liền trước mình.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đảm bảo khoảng cách an toàn theo mật độ phương tiện, tình hình giao thông thực tế.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thể xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?",
                "answers": [
                    {
                        "text": "Gặp biển báo nguy hiểm trên đường.",
                        "isCorrect": true
                    },
                    {
                        "text": "Gặp biển chỉ dẫn trên đường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gặp biển báo hết mọi lệnh cấm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gặp biển báo hết hạn chế tốc độ tối đa cho phép.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người lái xe phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy trong các trường hợp nào dưới đây?",
                "answers": [
                    {
                        "text": "Khi vượt xe khác.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi vượt xe khác tại đoạn đường được phép vượt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi xe sau xin vượt và đảm bảo an toàn.",
                        "isCorrect": true
                    },
                    {
                        "text": "Khi xe sau có tín hiệu vượt bên phải.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Tại các điểm giao cắt giữa đường bộ và đường sắt, quyền ưu tiên thuộc về loại phương tiện nào dưới đây?",
                "answers": [
                    {
                        "text": "Xe cứu hỏa.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe cứu thương.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phương tiện giao thông đường sắt.",
                        "isCorrect": true
                    },
                    {
                        "text": "Ô tô, mô tô và xe máy chuyên dùng.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Các phương tiện tham gia giao thông đường bộ (kể cả những xe có quyền ưu tiên) đều phải dừng lại bên phải đường của mình và trước vạch 'dừng xe' tại các điểm giao cắt giữa đường bộ và đường sắt khi có báo hiệu dừng nào dưới đây?",
                "answers": [
                    {
                        "text": "Hiệu lệnh của nhân viên gác chắn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đèn đỏ sáng nháy, cờ đỏ, biển đỏ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Còi, chuông kêu, chắn đã đóng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tất cả các ý trên.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đoạn đường bộ giao nhau đồng mức với đường sắt, người không có nhiệm vụ có được tự ý mở chắn đường ngang khi chắn đã đóng hay không?",
                "answers": [
                    {
                        "text": "Không được phép.",
                        "isCorrect": true
                    },
                    {
                        "text": "Được phép nhưng phải đảm bảo an toàn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Được phép tùy từng hoàn cảnh và điều kiện cụ thể.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Tác dụng của mũ bảo hiểm đối với người ngồi trên xe mô tô hai bánh trong trường hợp xảy ra tai nạn giao thông là gì?",
                "answers": [
                    {
                        "text": "Để làm đẹp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Để tránh mưa nắng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Để giảm thiểu chấn thương vùng đầu.",
                        "isCorrect": true
                    },
                    {
                        "text": "Để các loại phương tiện khác dễ quan sát.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi điều khiển phương tiện tham gia giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
                "answers": [
                    {
                        "text": "Thay đổi tốc độ của xe trên đường bộ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Thay đổi tay số của xe trên đường bộ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Lạng lách, đánh võng trên đường bộ.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người lái xe phải nhanh chóng giảm tốc độ, tránh hoặc dừng lại sát lề đường bên phải để nhường đường cho các xe nào nêu dưới đây?",
                "answers": [
                    {
                        "text": "Xe chữa cháy, xe quân sự, xe công an, xe cứu thương, xe hộ đê sau khi thực hiện nhiệm vụ khẩn cấp, không có tín hiệu còi, cờ, đèn theo quy định của pháp luật.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe chữa cháy, xe quân sự, xe công an, xe cứu thương, xe hộ đê đi làm nhiệm vụ khẩn cấp có tín hiệu còi, cờ, đèn theo quy định của pháp luật.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe ô tô, xe máy, đoàn xe đang diễu hành có tổ chức có báo tín hiệu xin vượt bằng còi và đèn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên phải xử lý như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Tăng tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ qua đường giao nhau để đi trước xe đi trên đường ưu tiên.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhường đường cho xe đi trên đường ưu tiên từ bất kỳ hướng nào tới.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi xe ô tô, mô tô đến gần vị trí giao nhau giữa đường bộ và đường sắt không có rào chắn, khi đèn tín hiệu màu đỏ đã bật sáng hoặc khi có tiếng chuông báo hiệu, người lái xe xử lý như thế nào?",
                "answers": [
                    {
                        "text": "Giảm tốc độ cho xe vượt qua đường sắt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhanh chóng cho xe vượt qua đường sắt trước khi tàu hỏa tới.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ cho xe vượt qua đường sắt trước khi tàu hỏa tới.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cho xe dừng ngay lại và giữ khoảng cách tối thiểu 5 mét tính từ ray gần nhất.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi điều khiển xe trên đường vòng, khuất tầm nhìn người lái xe cần phải làm gì để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Đi đúng làn đường, đúng tốc độ quy định, không được vượt xe khác.",
                        "isCorrect": true
                    },
                    {
                        "text": "Đi sang làn đường của xe ngược chiều để mở rộng tầm nhìn và vượt xe khác.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cho xe đi sát bên phải làn đường, bật tín hiệu báo hiệu để vượt bên phải xe khác.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người lái xe phải xử lý như thế nào khi quan sát phía trước thấy người đi bộ đang sang đường tại nơi có vạch đường dành cho người đi bộ để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Giảm tốc độ, đi từ từ để vượt qua trước người đi bộ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ, có thể dừng lại nếu cần thiết trước vạch dừng xe để nhường đường cho người đi bộ qua đường.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tăng tốc độ để vượt qua trước người đi bộ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi muốn lùi xe nhưng không quan sát được phía sau, cần làm gì để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Phải lùi thật chậm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Có thể được lùi xe nhưng phải mở cửa xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được lùi xe.",
                        "isCorrect": true
                    },
                    {
                        "text": "Bấm còi 3 lần liên tiếp trước khi lùi.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người điều khiển phương tiện tham gia giao thông đường bộ phải giảm tốc độ để có thể dừng lại một cách an toàn trong các trường hợp nào dưới đây?",
                "answers": [
                    {
                        "text": "Khi có người đi bộ, xe lăn của người khuyết tật qua đường; đến gần bến xe buýt, điểm dừng đỗ xe có khách đang lên, xuống xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi điều khiển phương tiện đi qua khu vực trạm kiểm soát tải trọng xe, trạm cảnh sát giao thông, trạm giao dịch thanh toán đối với các phương tiện sử dụng đường bộ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Tại những đoạn đường không bố trí biển báo hạn chế tốc độ, không bố trí biển báo khoảng cách an toàn tối thiểu giữa hai xe, người điều khiển phương tiện tham gia giao thông phải thực hiện quy định nào dưới đây để đảm bảo an toàn giao thông?",
                "answers": [
                    {
                        "text": "Người điều khiển phương tiện tham gia giao thông không hạn chế tốc độ và khoảng cách an toàn tối thiểu giữa hai xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Người điều khiển phương tiện tham gia giao thông không hạn chế tốc độ và khoảng cách an toàn tối thiểu giữa hai xe vào ban đêm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Người điều khiển phương tiện tham gia giao thông phải nghiêm chỉnh chấp hành quy định về tốc độ, khoảng cách an toàn tối thiểu giữa hai xe.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi tham gia giao thông trên đường cao tốc, người lái xe, người điều khiển xe máy chuyên dùng phải thực hiện như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe chỉ vào ban ngày.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tuân thủ tốc độ tối đa, tốc độ tối thiểu ghi trên biển báo hiệu đường bộ, sơn kẻ mặt đường trên các làn xe chỉ vào ban đêm.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Theo Luật giao thông đường bộ, tín hiệu đèn giao thông gồm 3 màu nào dưới đây?",
                "answers": [
                    {
                        "text": "Đỏ - Vàng - Xanh.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cam - Vàng - Xanh.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vàng - Xanh dương - Xanh lá.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đỏ - Cam - Xanh.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu màu vàng, người điều khiển phương tiện tham gia giao thông phải chấp hành như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Phải cho xe dừng lại trước vạch dừng, trường hợp đã đi quá vạch dừng hoặc đã quá gần vạch dừng nếu dừng lại thấy nguy hiểm thì được đi tiếp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Trong trường hợp tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ, chú ý quan sát nhường đường cho người đi bộ qua đường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhanh chóng tăng tốc độ, vượt qua nút giao và chú ý đảm bảo an toàn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Để báo hiệu cho xe phía trước biết xe mô tô của bạn muốn vượt, bạn phải có tín hiệu như thế nào dưới đây?",
                "answers": [
                    {
                        "text": "Ra tín hiệu bằng tay rồi cho xe vượt qua.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tăng ga mạnh để gây sự chú ý rồi cho xe vượt qua.",
                        "isCorrect": false
                    },
                    {
                        "text": "Bạn phải có tín hiệu bằng đèn hoặc còi.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi tham gia giao thông trên đường cao tốc, người điều khiển phương tiện cơ giới có được dừng, đỗ xe trên phần đường xe chạy hay không?",
                "answers": [
                    {
                        "text": "Được dừng, đỗ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được dừng, đỗ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Được dừng, đỗ nhưng phải đảm bảo an toàn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi xe gặp sự cố kỹ thuật trên đường cao tốc, bạn phải xử lý theo thứ tự như thế nào dưới đây để đảm bảo an toàn giao thông?",
                "answers": [
                    {
                        "text": "Bật đèn tín hiệu khẩn cấp, dừng xe ngay lập tức và đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
                        "isCorrect": false
                    },
                    {
                        "text": "Bật tín hiệu khẩn cấp, lập tức đưa xe vào làn đường xe chạy bên phải trong cùng, đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
                        "isCorrect": false
                    },
                    {
                        "text": "Bật đèn tín hiệu khẩn cấp, khi đủ điều kiện an toàn nhanh chóng đưa xe vào làn dừng đỗ khẩn cấp, đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi người lái xe ô tô dừng, đỗ sát theo lề đường, hè phố phía bên phải theo chiều đi của mình, bánh xe gần nhất không được cách lề đường, hè phố quá bao nhiêu mét trong các trường hợp dưới đây và không gây cản trở, nguy hiểm cho giao thông?",
                "answers": [
                    {
                        "text": "0,25 mét.",
                        "isCorrect": true
                    },
                    {
                        "text": "0,3 mét.",
                        "isCorrect": false
                    },
                    {
                        "text": "0,4 mét.",
                        "isCorrect": false
                    },
                    {
                        "text": "0,5 mét.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi dừng, đỗ xe trên đường phố hẹp, người lái xe ô tô phải dừng, đỗ xe ở vị trí cách xe ô tô đang đỗ bên kia đường khoảng cách tối thiểu là bao nhiêu mét trong các trường hợp dưới đây để đảm bảo an toàn giao thông?",
                "answers": [
                    {
                        "text": "5 mét.",
                        "isCorrect": false
                    },
                    {
                        "text": "10 mét.",
                        "isCorrect": false
                    },
                    {
                        "text": "15 mét.",
                        "isCorrect": false
                    },
                    {
                        "text": "20 mét.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Trên đường bộ, người lái xe ô tô có được phép dừng xe, đỗ xe song song với một xe khác đang dừng, đỗ hay không?",
                "answers": [
                    {
                        "text": "Được phép.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép.",
                        "isCorrect": true
                    },
                    {
                        "text": "Chỉ được phép dừng, đỗ khi đường vắng.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người điều khiển xe mô tô phải giảm tốc độ và hết sức thận trọng khi qua những đoạn đường nào dưới đây?",
                "answers": [
                    {
                        "text": "Đường ướt, đường có sỏi cát trên nền đường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đường hẹp có nhiều điểm giao cắt từ hai phía.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đường đèo dốc, vòng liên tục.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tất cả các ý nêu trên.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Khi gặp xe buýt đang dừng đón, trả khách, người điều khiển xe mô tô phải xử lý như thế nào dưới đây để đảm bảo an toàn giao thông?",
                "answers": [
                    {
                        "text": "Tăng tốc độ để nhanh chóng vượt qua bến đỗ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ đến mức an toàn có thể và quan sát người qua đường và từ từ vượt qua xe buýt.",
                        "isCorrect": true
                    },
                    {
                        "text": "Yêu cầu phải dừng lại phía sau xe buýt chờ xe rời bến mới đi tiếp.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8053b3508005c851369"
            },
            {
                "question": "Người lái xe khách, xe buýt cần thực hiện những nhiệm vụ gì dưới đây?",
                "answers": [
                    {
                        "text": "Luôn có ý thức về tính tổ chức, kỷ luật, thực hiện nghiêm biểu đồ xe chạy được phân công; thực hiện đúng hành trình, lịch trình, đón trả khách đúng nơi quy định; giúp đỡ hành khách đi xe, đặc biệt là những người khuyết tật, người già, trẻ em và phụ nữ có thai, có con nhỏ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Luôn có ý thức về tính tổ chức, kỷ luật, thực hiện linh hoạt biểu đồ xe chạy được phân công để tiết kiệm chi phí; thực hiện đúng hành trình, lịch trình khi có khách đi xe, đón trả khách ở những nơi thuận tiện cho hành khách đi xe.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a",
                "topic": 1
            },
            {
                "question": "Trong hoạt động vận tải đường bộ, các hành vi nào dưới đây bị nghiêm cấm?",
                "answers": [
                    {
                        "text": "Vận chuyển hàng nguy hiểm nhưng có giấy phép.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vận chuyển động vật hoang dã nhưng thực hiện đủ các quy định có liên quan.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vận chuyển hàng hóa cấm lưu thông; vận chuyển trái phép hàng nguy hiểm, động vật hoang dã.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8383b3508005c85136a",
                "topic": 2
            },
            {
                "question": "Trong hoạt động vận tải khách, những hành vi nào dưới đây bị nghiêm cấm?",
                "answers": [
                    {
                        "text": "Cạnh tranh nhau nhằm tăng lợi nhuận.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm giá để thu hút khách.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đe dọa, xúc phạm, tranh giành, lôi kéo hành khách; bắt ép hành khách sử dụng dịch vụ ngoài ý muốn; xuống khách nhằm trốn tránh phát hiện xe chở quá số người quy định.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tất cả các ý trên.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a",
                "topic": 3
            },
            {
                "question": "Thời gian làm việc của người lái xe ô tô không được lái xe liên tục quá bao nhiêu giờ trong trường hợp nào dưới đây?",
                "answers": [
                    {
                        "text": "Không quá 4 giờ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không quá 6 giờ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không quá 8 giờ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Liên tục tùy thuộc vào sức khỏe và khả năng của người lái xe.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a",
                "topic": 4
            },
            {
                "question": "Thời gian làm việc trong một ngày của người lái xe ô tô không được vượt quá bao nhiêu giờ trong trường hợp dưới đây?",
                "answers": [
                    {
                        "text": "Không quá 8 giờ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không quá 10 giờ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không quá 12 giờ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không hạn chế tùy thuộc vào sức khỏe và khả năng của người lái xe.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a",
                "topic": 5
            },
            {
                "question": "Người lái xe khách phải chấp hành những quy định nào dưới đây?",
                "answers": [
                    {
                        "text": "Đón, trả khách đúng nơi quy định, không trở hành khách trên mui, trong khoang hành lý hoặc để hành khách đu bám bên ngoài xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không chở hàng nguy hiểm, hàng có mùi hôi thối hoặc động vật, hàng hóa khác có ảnh hưởng đến sức khỏe của hành khách.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chở hành khách trên mui; để hàng hóa trong khoang chở khách, chở quá số người theo quy định.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Lái xe kinh doanh vận tải khách phải có trách nhiệm gì sau đây?",
                "answers": [
                    {
                        "text": "Kiểm tra các điều kiện bảo đảm an toàn của xe trước khi khởi hành; kiểm tra việc sắp xếp, chằng buộc hành lý, hàng hóa bảo đảm an toàn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đóng cửa lên xuống của xe trước và trong khi xe chạy.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đón trả khách tại vị trí do khách hàng yêu cầu.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Người kinh doanh vận tải hành khách có những quyền hạn nào dưới đây?",
                "answers": [
                    {
                        "text": "Tự ý thay đổi vị trí đón, trả khách theo hợp đồng vận chuyển hoặc đón thêm người ngoài danh sách hành khách đã ký.",
                        "isCorrect": false
                    },
                    {
                        "text": "Từ chối vận chuyển trước khi phương tiện rời bến, rời vị trí đón trả khách theo hợp đồng vận chuyển những người đã có vé hoặc người trong danh sách hợp đồng có hành vi gây rối trật tự công cộng, gây cản trở công việc kinh doanh vận tải, ảnh hưởng đến sức khỏe, tài sản của người khác, gian lận vé hoặc hành khách đang bị dịch bệnh nguy hiểm.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Hành khách có các quyền gì khi đi trên xe ô tô vận tải khách theo tuyến cố định?",
                "answers": [
                    {
                        "text": "Được vận chuyển theo đúng hợp đồng vận tải, cam kết của người kinh doanh về chất lượng vận tải; được miễn cước hành lý với trọng lượng không quá 20 kg và với kích thước phù hợp với thiết kế của xe; được từ chối chuyến đi trước khi phương tiện khởi hành và được trả lại tiền vé theo quy định của Bộ Giao thông vận tải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Được vận chuyển theo hợp đồng vận tải, cam kết của người kinh doanh về vận tải; được miễn cước hành lý với trọng lượng không quá 50 kg và với kích thước không quá cồng kềnh; được từ chối chuyến đi trước khi phương tiện khởi hành và được trả lại tiền vé.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Hành khách có các nghĩa vụ gì khi đi trên xe ô tô vận tải hành khách?",
                "answers": [
                    {
                        "text": "Mua vé và trả cước, phí vận tải hành lý mang theo quá mức quy định; có mặt tại nơi xuất phát đúng thời gian thỏa thuận; chấp hành quy định về vận chuyển; thực hiện đúng hướng dẫn của lái xe, nhân viên phục vụ trên xe về các quy định bảo đảm trật tự, an toàn giao thông.",
                        "isCorrect": true
                    },
                    {
                        "text": "Được mang theo hành lý, hàng hóa mà pháp luật cấm lưu thông khi đã trả cước, phí vận tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Người kinh doanh vận tải hàng hóa có các quyền gì ở dưới đây?",
                "answers": [
                    {
                        "text": "Yêu cầu người thuê vận tải cung cấp thông tin cần thiết về hàng hóa để ghi vào giấy vận chuyển và có quyền kiểm tra tính xác thực của các thông tin đó.",
                        "isCorrect": true
                    },
                    {
                        "text": "Yêu cầu xếp hàng hóa vận chuyển trên xe vượt quá chiều cao quy định nhưng phải được chằng buộc chắc chắn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Yêu cầu xếp hàng hóa vượt tải trọng 10%.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Người kinh doanh vận tải hàng hóa có các nghĩa vụ gì dưới đây?",
                "answers": [
                    {
                        "text": "Cung cấp phương tiện và thực hiện thời gian, địa điểm giao hàng hóa cho người nhận hàng theo điều kiện của người kinh doanh vận tải; chịu trách nhiệm về hậu quả mà người làm công, người đại diện gây ra do thực hiện yêu cầu của người kinh doanh vận tải phù hợp với quy định của pháp luật.",
                        "isCorrect": false
                    },
                    {
                        "text": "Bồi thường thiệt hại cho người thuê vận tải do mất mát, hư hỏng hàng hóa xảy ra trong quá trình vận tải từ lúc nhận hàng đến lúc giao hàng; bồi thường thiệt hại do người làm công, người đại diện gây ra trong khi thực hiện công việc được người kinh doanh vận tải giao; chịu trách nhiệm về hậu quả mà người làm công, người đại diện gây ra do thực hiện yêu cầu của người kinh doanh vận tải trái với quy định của pháp luật.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Người thuê vận tải hàng hóa có các quyền hạn gì dưới đây?",
                "answers": [
                    {
                        "text": "Từ chối xếp hàng lên phương tiện mà phương tiện đó không đúng thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải giao hàng đúng thời gian, địa điểm đã thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải bồi thường thiệt hại theo quy định của pháp luật.",
                        "isCorrect": true
                    },
                    {
                        "text": "Từ chối xếp hàng hóa lên phương tiện khi thấy phương tiện đó không phù hợp với yêu cầu; yêu cầu người kinh doanh vận tải giao hàng trước thời hạn đã thỏa thuận trong hợp đồng; yêu cầu người kinh doanh vận tải bồi thường thiệt hại khi người kinh doanh vận tải gây thiệt hại.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Người thuê vận tải hàng hóa có các nghĩa vụ gì dưới đây?",
                "answers": [
                    {
                        "text": "Chuẩn bị đầy đủ các giấy tờ hợp pháp về hàng hóa trước khi giao hàng hóa cho người kinh doanh vận tải; đóng gói hàng hóa đúng quy cách, ghi ký hiệu, mã hiệu hàng hóa đầy đủ, rõ ràng; giao hàng hóa cho người kinh doanh vận tải đúng thời gian, địa điểm và nội dung khác ghi trong giấy gửi hàng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Chuẩn bị đầy đủ các giấy tờ hợp pháp về phương tiện vận chuyển hàng hóa và giao cho người lái xe; xếp hàng hóa lên phương tiện vận chuyển đảm bảo an toàn; giao hàng hóa cho người nhận hàng đúng thời gian, địa điểm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Người nhận hàng có các quyền gì dưới đây?",
                "answers": [
                    {
                        "text": "Nhận và kiểm tra hàng hóa nhận được theo giấy vận chuyển hoặc chứng từ tương đương khác; yêu cầu người kinh doanh vận tải thanh toán chi phí phát sinh do giao hàng hóa chậm.",
                        "isCorrect": true
                    },
                    {
                        "text": "Yêu cầu hoặc thông báo cho người thuê vận tải để yêu cầu người lái xe bồi thường thiệt hại do mất mát, hư hỏng hàng hóa; nhận hàng hóa không theo giấy vận chuyển hoặc chứng từ tương đương khác.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Người nhận hàng có các nghĩa vụ gì dưới đây?",
                "answers": [
                    {
                        "text": "Nhận hàng hóa đúng thời gian, địa điểm đã thỏa thuận.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xuất trình giấy vận chuyển và giấy tờ tùy thân cho người kinh doanh vận tải trước khi nhận hàng hóa; thanh toán chi phí phát sinh do nhận hàng chậm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Hàng siêu trường, siêu trọng được hiểu như thế nào là đúng?",
                "answers": [
                    {
                        "text": "Là hàng có kích thước hoặc trọng lượng vượt quá giới hạn quy định nhưng không thể tháo rời ra được.",
                        "isCorrect": true
                    },
                    {
                        "text": "Là hàng có kích thước vượt quá kích thước và trọng lượng của xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Là hàng có kích thước hoặc trọng lượng vượt quá giới hạn quy định nhưng có thể tháo rời.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Việc vận chuyển động vật sống phải tuân theo những quy định nào dưới đây?",
                "answers": [
                    {
                        "text": "Tùy theo loại động vật sống, người kinh doanh vận tải yêu cầu người thuê vận tải áp tải để chăm sóc trong quá trình vận tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Người thuê vận tải chịu trách nhiệm về việc xếp dỡ động vật sống theo hướng dẫn của người kinh doanh vận tải; trường hợp người thuê vận tải không thực hiện được thì phải trả cước, phí xếp, dỡ cho người kinh doanh vận tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Xe vận chuyển hàng nguy hiểm phải chấp hành những quy định nào dưới đây?",
                "answers": [
                    {
                        "text": "Phải có giấy phép do cơ quan có thẩm quyền cấp, xe vận chuyển hàng nguy hiểm không được dừng, đỗ nơi đông người, những nơi dễ xảy ra nguy hiểm.",
                        "isCorrect": true
                    },
                    {
                        "text": "Phải được chuyên chở trên xe chuyên dùng để vận chuyển hàng nguy hiểm; xe vận chuyển hàng nguy hiểm phải chạy liên tục không được dừng, đỗ trong quá trình vận chuyển.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Trong đô thị, người lái xe buýt, xe chở hàng phải thực hiện những quy định nào dưới đây?",
                "answers": [
                    {
                        "text": "Người lái xe buýt phải chạy đúng tuyến, đúng lịch trình và dừng đỗ đúng nơi quy định; người lái xe chở hàng phải hoạt động đúng tuyến, phạm vi và thời gian quy định đối với từng loại xe.",
                        "isCorrect": true
                    },
                    {
                        "text": "Người lái xe buýt, xe chở hàng đón, trả khách, hàng hóa theo thỏa thuận giữa hành khách, chủ hàng và người lái xe.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Việc vận chuyển hàng hóa bằng xe ô tô phải chấp hành các quy định nào dưới đây?",
                "answers": [
                    {
                        "text": "Hàng hóa vận chuyển trên xe phải được sắp xếp gọn gàng và chằng buộc chắc chắn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi vận chuyển hàng rời phải che đậy, không để rơi vãi.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Những ký hiệu hàng hóa dưới đây, ký hiệu nào chống mưa?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2018.28.10.png?alt=media&token=5ee38461-772c-49f0-8624-1cd7324d2fc6",
                "answers": [
                    {
                        "text": "Hình 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hình 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hình 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Ký hiệu chuyên dùng nào biểu hiện hàng chuyên chở phải tránh ánh nắng mặt trời?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2018.29.14.png?alt=media&token=f84e0e66-145b-4cd3-bdf9-ffc9aebed0ff",
                "answers": [
                    {
                        "text": "Hình 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hình 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Hình nào dưới đây biểu hiện hàng chuyên chở dễ vỡ phải cẩn thận?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2018.30.37.png?alt=media&token=3e4879a6-7994-4a08-98b6-0a171183c84b",
                "answers": [
                    {
                        "text": "Hình 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hình 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Hình nào dưới đây đòi hỏi hàng phải xếp theo hướng thẳng đứng?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2018.32.57.png?alt=media&token=9a81423d-349c-445c-a0d8-4ed0c7cc92e0",
                "answers": [
                    {
                        "text": "Hình 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hình 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hình 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Hình nào dưới đây biểu hiện hàng chuyên chở là chất lỏng?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2018.30.37.png?alt=media&token=3e4879a6-7994-4a08-98b6-0a171183c84b",
                "answers": [
                    {
                        "text": "Hình 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hình 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8383b3508005c85136a"
            },
            {
                "question": "Người hành nghề lái xe khi thực hiện tốt việc rèn luyện, nâng cao trách nhiệm, đạo đức nghề nghiệp sẽ thu được kết quả như thế nào dưới đây?",
                "answers": [
                    {
                        "text": "Được khách hàng, xã hội tôn trọng; được đồng nghiệp quý mến, giúp đỡ; được doanh nghiệp tin dùng và đóng góp nhiều cho xã hội.",
                        "isCorrect": false
                    },
                    {
                        "text": "Thu hút được khách hàng, góp phần quan trọng trong xây dựng thương hiệu, kinh doanh có hiệu quả cao.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8993b3508005c851374",
                "topic": 1
            },
            {
                "question": "Người lái xe vận tải hàng hóa cần thực hiện những nhiệm vụ gì ghi ở dưới đây?",
                "answers": [
                    {
                        "text": "Thực hiện nghiêm chỉnh những nội dung hợp đồng giữa chủ phương tiện với chủ hàng trong việc vận chuyển và bảo quản hàng hóa trong quá trình vận chuyển; không chở hàng cấm, không xếp hàng quá trọng tải của xe, quá trọng tải cho phép của cầu, đường; khi vận chuyển hàng hóa quá khổ, quá tải, hàng nguy hiểm, hàng siêu trường, siêu trọng phải có giấy phép.",
                        "isCorrect": true
                    },
                    {
                        "text": "Thực hiện nghiêm chỉnh những nội dung hợp đồng giữa chủ hàng với khách hàng trong việc vận chuyển và bảo quản hàng hóa trong quá trình vận chuyển; trong trường hợp cần thiết có thể xếp hàng quá trọng tải của xe, quá trọng tải cho phép của cầu theo yêu cầu của chủ hàng; khi vận chuyển hàng hóa quá khổ, quá tải, hàng nguy hiểm, hàng siêu trường, siêu trọng phải được chủ hàng cho phép.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8993b3508005c851374",
                "topic": 2
            },
            {
                "question": "Người lái xe kinh doanh vận tải cần thực hiện những công việc gì ghi ở dưới đây để thường xuyên rèn luyện nâng cao đạo đức nghề nghiệp?",
                "answers": [
                    {
                        "text": "Phải yêu quý xe, quản lý và sử dụng xe tốt; bảo dưỡng xe đúng định kỳ; thực hành tiết kiệm vật tư, nhiên liệu; luôn tu dưỡng bản thân, có lối sống lành mạnh, tác phong làm việc công nghiệp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nắm vững các quy định của pháp luật, tự giác chấp hành pháp luật, lái xe an toàn; coi hành khách như người thân, là đối tác tin cậy; có ý thức tổ chức kỷ luật và xây dựng doanh nghiệp vững mạnh; có tinh thần hợp tác, tương trợ, giúp đỡ đồng nghiệp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8993b3508005c851374",
                "topic": 3
            },
            {
                "question": "Người lái xe và nhân viên phục vụ trên ô tô vận tải hành khách phải có những trách nhiệm gì theo quy định dưới đây?",
                "answers": [
                    {
                        "text": "Kiểm tra các điều kiện bảo đảm an toàn của xe sau khi khởi hành; có trách nhiệm lái xe thật nhanh khi chậm giờ của khách.",
                        "isCorrect": false
                    },
                    {
                        "text": "Kiểm tra các điều kiện bảo đảm an toàn của xe trước khi khởi hành; có thái độ văn minh, lịch sự, hướng dẫn hành khách ngồi đúng nơi quy định; kiểm tra việc sắp xếp, chằng buộc hành lý, bảo đảm an toàn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Có biện pháp bảo vệ tính mạng, sức khỏe, tài sản của hành khách đi xe, giữ gìn trật tự; vệ sinh trong xe; đóng cửa lên xuống của xe trước và trong khi xe chạy.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 2 và ý 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8993b3508005c851374",
                "topic": 4
            },
            {
                "question": "Khái niệm về văn hóa giao thông được hiểu như thế nào là đúng?",
                "answers": [
                    {
                        "text": "Là sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông; là ý thức trách nhiệm với cộng đồng khi tham gia giao thông.",
                        "isCorrect": false
                    },
                    {
                        "text": "Là ứng xử có văn hóa, có tình yêu thương con người trong các tình huống không may xảy ra khi tham gia giao thông.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8993b3508005c851374",
                "topic": 5
            },
            {
                "question": "Trên làn đường dành cho ô tô có vũng nước lớn, có nhiều người đi xe mô tô trên làn đường bên cạnh, người lái xe ô tô xử lý như thế nào là có văn hóa giao thông?",
                "answers": [
                    {
                        "text": "Cho xe chạy thật nhanh qua vũng nước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ cho xe chạy chậm qua vũng nước.",
                        "isCorrect": true
                    },
                    {
                        "text": "Giảm tốc độ cho xe chạy qua làn đường dành cho mô tô để tránh vũng nước.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Người lái xe cố tình không phân biệt làn đường, vạch phân làn, phóng nhanh, vượt ẩu, vượt đèn đỏ, đi vào đường cấm, đường một chiều được coi là hành vi nào trong các hành vi dưới đây?",
                "answers": [
                    {
                        "text": "Là bình thường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Là thiếu văn hóa giao thông.",
                        "isCorrect": true
                    },
                    {
                        "text": "Là có văn hóa giao thông.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Khi sơ cứu người bị tai nạn giao thông đường bộ, có vết thương chảy máu ngoài, màu đỏ tươi phun thành tia và phun mạnh khi mạch đập, bạn phải làm gì dưới đây?",
                "answers": [
                    {
                        "text": "Thực hiện cầm máu trực tiếp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Thực hiện cầm máu không trực tiếp (chặn động mạch).",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Người lái xe có văn hóa khi tham gia giao thông phải đáp ứng các điều kiện nào dưới đây?",
                "answers": [
                    {
                        "text": "Có trách nhiệm với bản thân và với cộng đồng; tôn trọng, nhường nhịn người khác.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tận tình giúp đỡ người tham gia giao thông gặp hoạn nạn; giúp đỡ người khuyết tật, trẻ em và người cao tuổi.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Trong các hành vi dưới đây, người lái xe mô tô có văn hóa giao thông phải ứng xử như thế nào?",
                "answers": [
                    {
                        "text": "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông, chỉ đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chấp hành quy định về tốc độ, đèn tín hiệu, biển báo hiệu, vạch kẻ đường khi lái xe; chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông; nhường đường cho người đi bộ, người già, trẻ em và người khuyết tật.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Trong các hành vi dưới đây, người lái xe mô tô có văn hóa giao thông phải ứng xử như thế nào?",
                "answers": [
                    {
                        "text": "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đạt chuẩn, cài quai đúng quy cách.",
                        "isCorrect": true
                    },
                    {
                        "text": "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông.",
                        "isCorrect": false
                    },
                    {
                        "text": "Điều khiển xe và đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Trong các hành vi dưới đây, người lái xe ô tô, mô tô có văn hóa giao thông phải ứng xử như thế nào?",
                "answers": [
                    {
                        "text": "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe.",
                        "isCorrect": true
                    },
                    {
                        "text": "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông; dừng xe, đỗ xe ở nơi thuận tiện hoặc theo yêu cầu của hành khách, của người thân.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dừng và đỗ xe ở nơi thuận tiện cho việc chuyên chở hành khách và giao nhận hàng hóa; sử dụng rượu, bia thì có thể lái xe.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Người có văn hóa giao thông khi điều khiển xe cơ giới tham gia giao thông đường bộ phải đảm bảo các điều kiện gì dưới đây?",
                "answers": [
                    {
                        "text": "Có giấy phép lái xe phù hợp với loại xe được phép điều khiển; xe cơ giới đảm bảo các quy định về chất ượng, an toàn kỹ thuật và bảo vệ môi trường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Có giấy chứng nhận bảo hiểm trách nhiệm dân sự của chủ xe cơ giới còn hiệu lực; nộp phí sử dụng đường bộ theo quy định.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Khi xảy ra tai nạn giao thông, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì dưới đây?",
                "answers": [
                    {
                        "text": "Đặt các biển cảnh báo hoặc vật báo hiệu ở phía trước và phía sau hiện trường xảy ra tai nạn để cảnh báo; kiểm tra khả năng xảy ra hỏa hoạn do nhiên liệu bị rò rỉ; bảo vệ hiện trường vụ tai nạn và cấp cứu người bị thương.",
                        "isCorrect": true
                    },
                    {
                        "text": "Đặt các biển cảnh báo hoặc vật báo hiệu ở phía trên nóc xe xảy ra tai nạn để cảnh báo; kiểm tra khả năng xảy ra mất an toàn do nước làm mát bị rò rỉ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Khi xảy ra tai nạn giao thông, có người bị thương nghiêm trọng, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì dưới đây?",
                "answers": [
                    {
                        "text": "Thực hiện sơ cứu ban đầu trong trường hợp khẩn cấp; thông báo vụ tai nạn đến cơ quan thi hành pháp luật.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhanh chóng lái xe gây tai nạn hoặc đi nhờ xe khác ra khỏi hiện trường vụ tai nạn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Khi sơ cứu ban đầu cho người bị tai nạn giao thông đường bộ không còn hô hấp, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì dưới đây?",
                "answers": [
                    {
                        "text": "Đặt nạn nhân nằm ngửa, khai thông đường thở của nạn nhân.",
                        "isCorrect": false
                    },
                    {
                        "text": "Thực hiện các biện pháp hô hấp nhân tạo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông có bị nghiêm cấm hay không?",
                "answers": [
                    {
                        "text": "Không bị nghiêm cấm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nghiêm cấm tùy từng trường hợp cụ thể.",
                        "isCorrect": false
                    },
                    {
                        "text": "Bị nghiêm cấm.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Khi xảy ra tai nạn giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
                "answers": [
                    {
                        "text": "Xâm phạm tính mạng, sức khỏe, tài sản của người bị tai nạn và người gây tai nạn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Khi xảy ra tai nạn giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
                "answers": [
                    {
                        "text": "Xâm phạm tính mạng, sức khỏe, tài sản của người bị nạn và người gây tai nạn.",
                        "isCorrect": true
                    },
                    {
                        "text": "Sơ cứu người bị nạn khi cơ quan có thẩm quyền chưa cho phép.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sơ cứu người gây tai nạn khi cơ quan có thẩm quyền chưa cho phép.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Trong đoạn đường hai chiều tại khu đông dân cư đang ùn tắc, người điều khiển xe mô tô hai bánh có văn hóa giao thông sẽ lựa chọn xử lý tình huống nào dưới đây?",
                "answers": [
                    {
                        "text": "Cho xe lấn sang làn ngược chiều để nhanh chóng thoát khỏi nơi ùn tắc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Điều khiển xe lên vỉa hè để nhanh chóng thoát khỏi nơi ùn tắc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Kiên nhẫn tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu giao thông, di chuyển trên đúng phần đường bên phải theo chiều đi, nhường đường cho các phương tiện đi ngược chiều để nút tắc nhanh chóng được giải tỏa.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Trên đường đang xảy ra ùn tắc, những hành vi nào sau đây là thiếu văn hóa khi tham gia giao thông?",
                "answers": [
                    {
                        "text": "Bấm còi liên tục thúc giục các phương tiện phía trước nhường đường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đi lên vỉa hè, tận dụng mọi khoảng trống để nhanh chóng thoát khỏi nơi ùn tắc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Lấn sang trái đường cố gắng vượt lên xe khác.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tất cả các ý nêu trên.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8993b3508005c851374"
            },
            {
                "question": "Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sử dụng phanh trước để giảm tốc độ kết hợp với tắt chìa khóa điện của xe.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375",
                "topic": 1

            },
            {
                "question": "Khi vào số để khởi hành xe ô tô có số tự động, người lái xe phải thực hiện các thao tác nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Đạp bàn đạp phanh chân hết hành trình, vào số và nhả phanh tay, kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.",
                        "isCorrect": true
                    },
                    {
                        "text": "Đạp bàn đạp để tăng ga với mức độ phù hợp, vào số và kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375",
                "topic": 2
            },
            {
                "question": "Khi nhả hệ thống phanh dừng cơ khí điều khiển bằng tay (phanh tay), người lái xe cần phải thực hiện các thao tác nào?",
                "answers": [
                    {
                        "text": "Dùng lực tay phải kéo cần phanh tay về phía sau hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dùng lực tay phải bóp khóa hãm đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải kéo cần phanh tay về phía sau đồng thời bóp khóa hãm.",
                        "isCorrect": true
                    },
                    {
                        "text": "Dùng lực tay phải đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375",
                "topic": 3
            },
            {
                "question": "Khi khởi hành ô tô sử dụng hộp số cơ khí trên đường bằng, người lái xe cần thực hiện các thao tác nào theo trình tự dưới đây?",
                "answers": [
                    {
                        "text": "Kiểm tra an toàn xung quanh xe ô tô; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp (côn) và giữ trong khoảng 3 giây; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát, sau đó vừa tăng ga vừa nhả hết ly hợp để cho xe ô tô chuyển động.",
                        "isCorrect": false
                    },
                    {
                        "text": "Kiểm tra an toàn xung quanh xe ô tô; đạp ly hợp (côn) hết hành trình; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp và giữ trong khỏang 3 giây, sau đó vừa tăng ga vừa nhả hết ly hợp (côn) để cho xe ô tô chuyển động.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375",
                "topic": 4
            },
            {
                "question": "Khi quay đầu xe, người lái xe cần phải quan sát và thực hiện các thao tác nào để đảm bảo an toàn giao thông?",
                "answers": [
                    {
                        "text": "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe cho thích hợp; quay đầu xe với tốc độ thấp; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đầu xe về phía nguy hiểm đưa đuôi xe về phía an toàn.",
                        "isCorrect": true
                    },
                    {
                        "text": "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe; quay đầu xe với tốc độ tối đa; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đuôi xe về phía nguy hiểm và đầu xe về phía an toàn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375",
                "topic": 5
            },
            {
                "question": "Khi tránh nhau trên đường hẹp, người lái xe cần phải chú ý những điểm nào để đảm bảo an toàn giao thông?",
                "answers": [
                    {
                        "text": "Không nên đi cố vào đường hẹp; xe đi ở phía sườn núi nên dừng lại trước để nhường đường; khi dừng xe nhường đường phải đỗ ngay ngắn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Trong khi tránh nhau không nên đổi số; khi tránh nhau ban đêm, phải tắt đèn pha bật đèn cốt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi tránh nhau ban đêm, phải thường xuyên bật đèn pha tắt đèn cốt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375",
                "topic": 1
            },
            {
                "question": "Khi điều khiển ô tô lên dốc cao, người lái xe cần thực hiện các thao tác nào?",
                "answers": [
                    {
                        "text": "Tăng lên số cao từ chân dốc, điều chỉnh ga cho xe nhanh lên dốc; đến gần đỉnh dốc phải tăng ga để xe nhanh chóng qua dốc; về số thấp, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết.",
                        "isCorrect": false
                    },
                    {
                        "text": "Về số thấp từ chân dốc, điều chỉnh ga cho xe từ từ lên dốc; đến gần đỉnh dốc phải đi chậm, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375",
                "topic": 2
            },
            {
                "question": "Khi điều khiển ô tô xuống dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Tăng lên số cao, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Về số thấp, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Về số không (0), nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375",
                "topic": 3
            },
            {
                "question": "Khi xuống dốc, muốn dừng xe, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp nửa ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân và kéo phanh tay.",
                        "isCorrect": true
                    },
                    {
                        "text": "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên trái; đạp hết hành trình ly hợp (côn) và nhả bàn đạp ga để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được tại chỗ dừng; khi xe đã dừng, đạp và giữ phanh chân.",
                        "isCorrect": false
                    },
                    {
                        "text": "Có tín hiệu rẽ trái, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số không (N) để xe đi đến chỗ dừng, khi xe đã dừng, kéo phanh tay.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375",
                "topic": 4
            },
            {
                "question": "Khi điều khiển xe trên đường vòng, người lái xe cần phải làm gì để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng coi, đèn; giảm tốc độ tới mức cần thiết, về số thấp và thực hiện quay vòng với tốc độ phù hợp với bán kính cong của đường vòng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; tăng tốc để nhanh chóng qua đường vòng và giảm tốc độ sau khi qua đường vòng.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375",
                "topic": 5
            },
            {
                "question": "Khi điều khiển xe ô tô rẽ phải ở chỗ đường giao nhau, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe sang làn đường bên trái; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; tăng tốc độ và quan sát an toàn phía bên trái để điều khiển xe qua chỗ đường giao nhau.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe ô tô rẽ trái ở chỗ đường giao nhau, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Cách chỗ rẽ một khoảng cách an toàn giảm tốc độ, có tín hiệu rẽ trái xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi sang làn đường bên trái; cho xe chạy chậm tới phía trong của tâm đường giao nhau mới rẽ trái để điều khiển xe qua chỗ đường giao nhau.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái, tăng tốc độ để xe nhanh chóng qua chỗ đường giao nhau; có tín hiệu xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi làn đường sang phải để mở rộng vòng cua.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe sử dụng hộp số cơ khí vượt qua rãnh lớn cắt ngang mặt đường, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Gài số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tăng số, tăng tốc độ để bánh xe sau vượt qua rãnh.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tăng ga, tăng số để hai bánh xe trước và bánh xe sau vượt qua khỏi rãnh và chạy bình thường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gài số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tiếp tục để bánh xe sau từ từ xuống rãnh rồi tăng dần ga cho xe ô tô lên khỏi rãnh.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe qua đường sắt, người lái xe cần phải thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Khi có chuông báo hoặc thanh chắn đã hạ xuống, người lái xe phải dừng xe tạm thời đúng khoảng cách an toàn, kéo phanh tay nếu đường dốc hoặc phải chờ lâu.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi không có chuông báo hoặc thanh chắn không hạ xuống, người lái xe cần phải quan sát nếu thấy đủ điều kiện an toàn thì về số thấp, tăng ga nhẹ và không thay đổi số trong quá trình vượt qua đường sắt để tránh động cơ chết máy cho xe cho vượt qua.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe ô tô tự đổ, người lái xe cần chú ý những điểm gì để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Khi chạy trên đường xấu, nhiều ổ gà nên chạy chậm để thùng xe không bị lắc mạnh, không gây hiện tượng lệch 'ben'; khi chạy vào đường vòng, cần giảm tốc độ, không lấy lái gấp và không phanh gấp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi chạy trên đường quốc lộ, đường bằng phẳng không cần hạ hết thùng xe xuống.",
                        "isCorrect": false
                    },
                    {
                        "text": "Khi đổ hàng phải chọn vị trí có nền đường cứng và phẳng, dừng hẳn xe, kéo chặt phanh tay; sau đó mới điều khiển cơ cấu nâng 'ben' để đổ hàng, đổ xong hàng mới hạ thùng xuống.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe tăng số, người lái xe cần chú ý những điểm gì để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, vù ga phải phù hợp với tốc độ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe giảm số, người lái xe cần phải chú ý những điểm gì để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải giảm thứ tự từ cao đến thấp, phối hợp các động tác phải nhịp nhàng, chính xác.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được nhìn xuống buồng lái, cần phải giảm thứ tự từ cao đến thấp, phối hợp các động tác phải nhịp nhàng, chính xác, vù ga phải phù hợp với tốc độ.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Để giảm tốc độ khi ô tô đi xuống đường dốc dài, người lái xe phải thực hiện các thao tác nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Nhả bàn đạp ga, đạp ly hợp (côn) hết hành trình, đạp mạnh phanh chân để giảm tốc độ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Về số thấp phù hợp, nhả bàn đạp ga, kết hợp đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhả bàn đạp ga, tăng lên số cao, đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển ô tô qua đường ngập nước, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Tăng lên số cao, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đạp ly hợp (côn) hết hành trình, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Quan sát, ước lượng độ ngập nước mà xe ô tô có thể vượt qua an toàn, về số thấp, giữ đều ga và giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe ô tô tới gần xe chạy ngược chiều vào ban đêm, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Chuyển từ đèn chiếu xa sang đèn chiếu gần; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
                        "isCorrect": true
                    },
                    {
                        "text": "Chuyển từ đèn chiếu gần sang đèn chiếu xa; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chuyển từ đèn chiếu xa sang đèn chiếu gần; nhìn thẳng vào đèn của xe chạy ngược chiều để tránh xe đảm bảo an toàn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe ô tô trên đường trơn cần chú ý những điểm gì để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm (sử dụng số L hoặc 1, 2 đối với xe số tự động), gài cần (nếu có), giữ đều ga, không lấy nhiều lái, không đánh lái ngoặt và phanh gấp.",
                        "isCorrect": true
                    },
                    {
                        "text": "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm, giữ đều ga, đánh lái ngoặt và phanh gấp khi cần thiết.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2018.49.38.png?alt=media&token=9fff6e8b-bb3c-4c83-b52c-c88dac2d22bb",
                "answers": [
                    {
                        "text": "Phanh tay đang hãm hoặc thiếu dầu phanh.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhiệt độ nước làm mát quá mức cho phép.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cửa xe đang mở.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2018.51.32.png?alt=media&token=fc0d9505-6c79-4640-aabf-e4b9d66638f5",
                "answers": [
                    {
                        "text": "Phanh tay đang hãm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Thiếu dầu phanh.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhiệt độ nước làm mát tăng quá mức cho phép.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dầu bôi trơn bị thiếu.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2018.53.39.png?alt=media&token=155c2e10-1e15-4e34-af4c-75f6b28e2779",
                "answers": [
                    {
                        "text": "Cửa xe đóng chưa chặt hoặc có cửa xe chưa đóng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Bộ nạp ắc quy gặp sự cố kỹ thuật.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dầu bôi trơn bị thiếu.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 2 và ý 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2018.54.56.png?alt=media&token=b84b3bc0-c276-4f5d-9943-6c56196fdc66",
                "answers": [
                    {
                        "text": "Thiếu dầu phanh, phanh tay đang hãm.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hệ thống túi khí an toàn gặp sự cố.",
                        "isCorrect": false
                    },
                    {
                        "text": "Lái xe và người ngồi ghế trước chưa cài dây an toàn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cửa đóng chưa chặt, có cửa chưa đóng.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2018.56.47.png?alt=media&token=3d2e8c5f-d07c-495d-8666-4f6a9f56ffcd",
                "answers": [
                    {
                        "text": "Báo hiệu thiếu dầu phanh.",
                        "isCorrect": false
                    },
                    {
                        "text": "Áp suất lốp không đủ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đang hãm phanh tay.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sắp hết nhiên liệu.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Trong các loại nhiên liệu dưới đây, loại nhiên liệu nào giảm thiểu ô nhiễm môi trường?",
                "answers": [
                    {
                        "text": "Xăng và dầu diesel.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xăng sinh học và khí sinh học.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Các biện pháp tiết kiệm nhiên liệu khi chạy xe?",
                "answers": [
                    {
                        "text": "Bảo dưỡng xe theo định kỳ và có kế hoạch lộ trình trước khi xe chạy.",
                        "isCorrect": false
                    },
                    {
                        "text": "Kiểm tra áp suất lốp theo quy định và chạy xe với tốc độ phù hợp với tình trạng mặt đường và mật độ giao thông trên đường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi đã đỗ xe ô tô sát lề đường bên phải, người lái xe phải thực hiện các thao tác nào dưới đây khi mở cửa xuống xe để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Quan sát tình hình giao thông phía trước và sau, mở hé cánh cửa, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
                        "isCorrect": true
                    },
                    {
                        "text": "Mở cánh cửa và quan sát tình hình giao thông phía trước, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi lái xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Tạm dừng xe tại vị trí cách đường sắt tối thiểu 5 mét, hạ kính cửa, tắt các thiết bị âm thanh trên xe, quan sát, nếu không có tàu chạy qua, về số thấp, tăng ga nhẹ để tránh động cơ chết máy cho xe vượt qua.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tại vị trí cách đường sắt tối thiểu 5 mét quan sát phía trước, nếu tàu còn cách xa, tăng số cao, tăng ga để cho xe nhanh chóng vượt qua đường sắt.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi lái xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe thực hiện thao tác: tạm dừng xe tại vị trí cách đường sắt tối thiểu 5 mét, hạ kính cửa, tắt các thiết bị âm thanh trên xe, quan sát và nếu không có tàu chạy qua thì về số thấp, tăng ga nhẹ để tránh động cơ chết máy cho xe vượt qua để đảm bảo an toàn là đúng hay không?",
                "answers": [
                    {
                        "text": "Không đúng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đúng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không cần thiết, vì nếu nhìn thấy tàu còn cách xa, người lái xe có thể tăng số cao, tăng ga để cho xe nhanh chóng vượt qua đường sắt.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe ô tô có hộp số tự động đi vào đường trơn trượt, lầy lội, người lái xe phải xử lý như thế nào để đảm bảo an toàn trong các trường hợp dưới đây?",
                "answers": [
                    {
                        "text": "Về số thấp, kết hợp phanh chân để giảm tốc độ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Giữ nguyên tay số D, kết hợp phanh tay để giảm tốc độ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Về số N (số 0), kết hợp phanh chân để giảm tốc độ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi động cơ ô tô đã khởi động, muốn điều chỉnh ghế của người lái, người lái xe phải để cần số ở vị trí nào?",
                "answers": [
                    {
                        "text": "Vị trí N hoặc vị trí P hoặc số 0.",
                        "isCorrect": true
                    },
                    {
                        "text": "Vị trí D hoặc số 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vị trí R.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe ô tô có hộp số tự động, người lái xe sử dụng chân như thế nào là đúng để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Không sử dụng chân trái; chân phải điều khiển bàn đạp phanh và bàn đạp ga.",
                        "isCorrect": true
                    },
                    {
                        "text": "Chân trái điều khiển bàn đạp phanh, chân phải điều khiển bàn đạp ga.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không sử dụng chân phải; chân trái điều khiển bàn đạp phanh và bàn đạp ga.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi tầm nhìn bị hạn chế bởi sương mù hoặc mưa to, người lái xe phải thực hiện các thao tác nào?",
                "answers": [
                    {
                        "text": "Tăng tốc độ, chạy gần xe trước, nhìn đèn hậu để định hướng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ, chạy cách xa xe trước với khoảng cách an toàn, bật đèn sương mù và đèn chiếu gần.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tăng tốc độ, bật đèn pha vượt qua xe chạy trước.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi đèn pha của xe đi ngược chiều gây chói mắt, làm giảm khả năng quan sát trên đường, người lái xe xử lý như thế nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Giảm tốc độ, nếu cần thiết có thể dừng xe lại.",
                        "isCorrect": true
                    },
                    {
                        "text": "Bật đèn pha chiếu xa và giữ nguyên tốc độ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tăng tốc độ, bật đèn pha đối diện xe phía trước.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Để đạt được hiệu quả phanh cao nhất, người lái xe mô tô phải sử dụng các kỹ năng như thế nào dưới đây?",
                "answers": [
                    {
                        "text": "Sử dụng phanh trước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sử dụng phanh sau.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm hết ga, sử dụng đồng thời cả phanh sau và phanh trước.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi lái xe ô tô trên mặt đường có nhiều 'ổ gà', người lái xe phải thực hiện thao tác như thế nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Giảm tốc độ, về số thấp và giữ đều ga.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tăng tốc độ cho xe lướt qua nhanh.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tăng tốc độ, đánh lái liên tục để tránh 'ổ gà'.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe ô tô gặp mưa to hoặc sương mù, người lái xe phải làm gì để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Bật đèn chiếu gần và đèn vàng, điều khiển gạt nước, điều khiển ô tô đi với tốc độ chậm để có thể quan sát được; tìm chỗ an toàn dừng xe, bật đèn dừng khẩn cấp báo hiệu cho các xe khác biết.",
                        "isCorrect": true
                    },
                    {
                        "text": "Bật đèn chiếu xa và đèn vàng, điều khiển gạt nước, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa hoặc sương mù.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tăng tốc độ, bật đèn pha vượt qua xe chạy phía trước.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Điều khiển xe ô tô trong trời mưa, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Giảm tốc độ, tăng cường quan sát, không nên phanh gấp, không nên tăng ga hay đánh vô lăng đột ngột, bật đèn pha gần, mở chế độ gạt nước ở chế độ phù hợp để đảm bảo quan sát.",
                        "isCorrect": true
                    },
                    {
                        "text": "Phanh gấp khi xe đi vào vũng nước và tăng ga ngay sau khi ra khỏi vũng nước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Bật đèn chiếu xa, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi lùi xe, người lái xe phải xử lý như thế nào để đảm bảo an toàn giao thông?",
                "answers": [
                    {
                        "text": "Quan sát bên trái, bên phải, phía sau xe, có tín hiệu cần thiết và lùi xe với tốc độ phù hợp.",
                        "isCorrect": true
                    },
                    {
                        "text": "Quan sát phía trước xe và lùi xe với tốc độ nhanh.",
                        "isCorrect": false
                    },
                    {
                        "text": "Quan sát bên trái và phía trước của xe và lùi xe với tốc độ nhanh.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Điều khiển xe ô tô trong khu vực đông dân cư cần lưu ý điều gì dưới đây?",
                "answers": [
                    {
                        "text": "Giảm tốc độ đến mức an toàn, quan sát, nhường đường cho người đi bộ; giữ khoảng cách an toàn với các xe phía trước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đi đúng làn đường quy định; chỉ được chuyển làn đường ở nơi cho phép, nhưng phải quan sát.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe ô tô nhập vào đường cao tốc người lái xe cần thực hiện như thế nào dưới đây để đảm bảo an toàn giao thông?",
                "answers": [
                    {
                        "text": "Quan sát, phát tín hiệu và lái xe nhập vào làn đường tăng tốc, nhường đường cho các xe đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì tăng tốc độ cho xe nhập vào làn đường cao tốc.",
                        "isCorrect": true
                    },
                    {
                        "text": "Phát tín hiệu, quan sát các xe đang chạy phía trước, nếu đảm bảo các điều kiện an toàn thì tăng tốc độ cho xe nhập ngay vào làn đường cao tốc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phát tín hiệu và lái xe nhập vào làn đường tăng tốc, quan sát các xe phía sau đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì giảm tốc độ, từ từ cho xe nhập vào làn đường cao tốc.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe ô tô ra khỏi đường cao tốc người lái xe cần thực hiện như thế nào dưới đây để đảm bảo an toàn giao thông?",
                "answers": [
                    {
                        "text": "Quan sát phía trước để tìm biển báo chỉ dẫn 'Lối ra đường cao tốc', kiểm tra tình trạng giao thông phía sau và bên phải, nếu đảm bảo điều kiện an toàn thì phát tín hiệu và điều khiển xe chuyển dần sang làn đường giảm tốc và ra khỏi đường cao tốc.",
                        "isCorrect": true
                    },
                    {
                        "text": "Quan sát phía trước để tìm biển báo chỉ dẫn 'Lối ra đường cao tốc', trường hợp vượt qua 'Lối ra đường cao tốc' thì phát tín hiệu, di chuyển sang làn đường giảm tốc và lùi xe quay trở lại.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Người lái xe được dừng xe, đỗ xe trên làn dừng khẩn cấp của đường cao tốc trong trường hợp nào dưới đây?",
                "answers": [
                    {
                        "text": "Xe gặp sự cố, tai nạn, hoặc trường hợp khẩn cấp không thể di chuyển bình thường.",
                        "isCorrect": true
                    },
                    {
                        "text": "Để nghỉ ngơi, đi vệ sinh, chụp ảnh, làm việc riêng...",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Trong trường hợp bất khả kháng, khi dừng xe, đỗ xe trên làn dừng khẩn cấp của đường cao tốc người lái xe phải xử lý như thế nào dưới đây là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Bật đèn cảnh báo sự cố, di chuyển phương tiện đến vị trí sát lề đường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sử dụng các thiết bị cảnh báo như chóp nón, biển báo, đèn chớp... đặt phía sau xe để cảnh báo các phương tiện khác.",
                        "isCorrect": false
                    },
                    {
                        "text": "Gọi số điện thoại khẩn cấp của đường cao tốc để được hỗ trợ nếu xe gặp sự cố, tai nạn hoặc các trường hợp khẩn cấp không thể di chuyển bình thường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tất cả các ý nêu trên.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển ô tô xuống đường dốc dài, độ dốc cao, người lái xe số tự động cần thực hiện các thao tác nào dưới đây để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Nhả bàn đạp ga, về số thấp (sử dụng số L hoặc 1, 2), đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nhả bàn đạp ga, về số không (N) đạp phanh chân và kéo phanh tay để giảm tốc độ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi đi từ đường nhánh ra đường chính, người lái xe phải xử lý như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Giảm tốc độ, nhường đường cho xe trên đường chính từ bất kỳ hướng nào tới.",
                        "isCorrect": true
                    },
                    {
                        "text": "Nháy đèn, bấm còi để xe đi trên đường chính biết và tăng tốc độ cho xe đi ra đường chính.",
                        "isCorrect": false
                    },
                    {
                        "text": "Quan sát xe đang đi trên đường chính, nếu là xe có kích thước lớn hơn thì nhường đường, xe có kích thước nhỏ hơn thì tăng tốc độ cho xe đi ra đường chính.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi đang lái xe mô tô và ô tô, nếu có nhu cầu sử dụng điện thoại để nhắn tin hoặc gọi điện, người lái xe phải thực hiện như thế nào trong các tình huống nêu dưới đây?",
                "answers": [
                    {
                        "text": "Giảm tốc độ để đảm bảo an toàn với xe phía trước và sử dụng điện thoại để liên lạc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ để dừng xe ở nơi cho phép dừng xe sau đó sử dụng điện thoại để liên lạc.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tăng tốc độ để cách xa xe phía sau và sử dụng điện thoại để liên lạc.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Những thói quen nào dưới đây khi điều khiển xe mô tô tay ga tham gia giao thông dễ gây tai nạn nguy hiểm?",
                "answers": [
                    {
                        "text": "Sử dụng còi.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phanh đồng thời cả phanh trước và phanh sau.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ sử dụng phanh trước.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Người ngồi trên xe ô tô cần thực hiện những thao tác mở cửa như thế nào dưới đây để xuống xe một cách an toàn?",
                "answers": [
                    {
                        "text": "Quan sát gương chiếu hậu hoặc xoay người quan sát phía trước và phía sau để phát hiện các phương tiện đang di chuyển tới gần, khi đủ điều kiện an toàn, dùng tay cách xa cửa hơn mở hé cửa, sau đó mở ở mức cần thiết để xuống xe.",
                        "isCorrect": true
                    },
                    {
                        "text": "Quan sát tình hình giao thông phía trước, không cần quan sát phía sau và bên mở cửa; mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Khi điều khiển xe mô tô quay đầu, người lái xe cần thực hiện như thế nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Bật tín hiệu báo rẽ trước khi quay đầu, từ từ giảm tốc độ đến mức có thể dừng lại.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ quay đầu xe tại những nơi được phép quay đầu.",
                        "isCorrect": false
                    },
                    {
                        "text": "Quan sát an toàn các phương tiện tới từ phía trước, phía sau, hai bên đồng thời nhường đường cho xe từ bên phải và phía trước đi tới.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tất cả các ý nêu trên.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Tay ga trên xe mô tô hai bánh có tác dụng gì trong các trường hợp dưới đây?",
                "answers": [
                    {
                        "text": "Để điều khiển xe chạy về phía trước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Để điều khiển xe chạy lùi.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Gương chiếu hậu của xe mô tô hai bánh, có tác dụng gì trong các trường hợp dưới đây?",
                "answers": [
                    {
                        "text": "Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
                        "isCorrect": false
                    },
                    {
                        "text": "Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Để quan sát an toàn phía sau cả bên trái và bên phải trước khi chuyển hướng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Để đảm bảo an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào trong các trường hợp dưới đây?",
                "answers": [
                    {
                        "text": "Tăng ga thật mạnh, giảm ga từ từ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tăng ga thật mạnh, giảm ga thật nhanh.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tăng ga từ từ, giảm ga thật nhanh.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tăng ga từ từ, giảm ga từ từ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Kỹ thuật cơ bản để giữ thăng bằng khi điều khiển xe mô tô đi trên đường gồ ghề như thế nào trong các trường hợp dưới đây?",
                "answers": [
                    {
                        "text": "Đứng thẳng trên giá gác chân lái sau đó hơi gập đầu gối và khủy tay, đi chậm để không nẩy quá mạnh.",
                        "isCorrect": true
                    },
                    {
                        "text": "Ngồi lùi lại phía sau, tăng ga vượt nhanh qua đoạn đường xóc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ngồi lệch sang bên trái hoặc bên phải để lấy thăng bằng qua đoạn đường gồ ghề.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8bb3b3508005c851375"
            },
            {
                "question": "Chủ phương tiện cơ giới đường bộ có được tự ý thay đổi màu sơn, nhãn hiệu hoặc các đặc tính kỹ thuật của phương tiện so với chứng nhận đăng ký xe hay không?",
                "answers": [
                    {
                        "text": "Được phép thay đổi bằng cách dán đề can với màu sắc phù hợp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép thay đổi.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tùy từng loại phương tiện cơ giới đường bộ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376",
                "topic": 1
            },
            {
                "question": "Xe ô tô tham gia giao thông đường bộ phải bảo đảm các quy định về chất lượng, an toàn kỹ thuật và bảo vệ môi trường nào ghi dưới đây?",
                "answers": [
                    {
                        "text": "Kính chắn gió, kính cửa phải là loại kính an toàn, bảo đảm tần nhìn cho người điều khiển; có đủ hệ thống hãm và hệ thống chuyển hướng có hiệu lực, tay lái xe ô tô ở bên trái của xe, có còi với âm lượng đúng quy chuẩn kỹ thuật.",
                        "isCorrect": false
                    },
                    {
                        "text": "Có đủ đèn chiếu sáng gần và xa, đèn soi biển số, đèn báo hãm, đèn tín hiệu; có đủ bộ phận giảm thanh, giảm khói, các kết cấu phải đủ độ bền và bảo đảm tính năng vận hành ổn định.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376",
                "topic": 2
            },
            {
                "question": "Xe mô tô và xe ô tô tham gia giao thông trên đường bộ phải bắt buộc có đủ bộ phận giảm thanh không?",
                "answers": [
                    {
                        "text": "Không bắt buộc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Bắt buộc.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tùy từng trường hợp.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376",
                "topic": 3
            },
            {
                "question": "Xe ô tô tham gia giao thông trên đường bộ phải có đủ các loại đèn gì dưới đây?",
                "answers": [
                    {
                        "text": "Đèn chiếu sáng gần và xa.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đèn soi biển số, đèn báo hãm và đèn tín hiệu.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dàn đèn pha trên nóc xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Kính chắn gió của xe ô tô phải đảm bảo yêu cầu nào dưới đây?",
                "answers": [
                    {
                        "text": "Là loại kính an toàn, kính nhiều lớp, đúng quy cách, không rạn nứt, đảm bảo hình ảnh quan sát rõ ràng, không bị méo mó.",
                        "isCorrect": true
                    },
                    {
                        "text": "Là loại kính trong suốt, không rạn nứt, đảm bảo tầm nhìn cho người điều khiển về phía trước mặt và hai bên.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376",
                "topic": 4
            },
            {
                "question": "Bánh xe lắp cho xe ô tô phải đảm bảo an toàn kỹ thuật như thế nào dưới đây?",
                "answers": [
                    {
                        "text": "Đủ số lượng, đủ áp suất, đúng cỡ lốp của nhà sản xuất hoặc tài liệu kỹ thuật quy định; lốp bánh dẫn hướng hai bên cùng kiểu hoa lốp, chiều cao hoa lốp đồng đều; không sử dụng lốp đắp; lốp không mòn đến dấu chỉ báo độ mòn của nhà sản xuất, không nứt, vỡ, phồng rộp làm hở lớp sợi mành.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vành, đĩa vành đúng kiểu loại, không rạn, nứt, cong vênh; bánh xe quay trơn, không bị bó kẹt hoặc cọ sát vào phần khác; moay ơ không bị rơ; lắp đặt chắc chắn, đủ các chi tiết kẹp chặt và phòng lỏng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376",
                "topic": 5
            },
            {
                "question": "Âm lượng của còi điện lắp trên ô tô (đo ở độ cao 1,2 mét với khoảng cách 2 mét tính từ đầu xe) là bao nhiêu?",
                "answers": [
                    {
                        "text": "Không nhỏ hơn 90 dB (A), không lớn hơn 115 dB (A).",
                        "isCorrect": true
                    },
                    {
                        "text": "Không nhỏ hơn 80 dB (A), không lớn hơn 105 dB (A).",
                        "isCorrect": false
                    },
                    {
                        "text": "Không nhỏ hơn 70 dB (A), không lớn hơn 90 dB (A).",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Mục đích của bảo dưỡng thường xuyên đối với xe ô tô có tác dụng gì dưới đây?",
                "answers": [
                    {
                        "text": "Bảo dưỡng ô tô thường xuyên làm cho ô tô luôn luôn có tính năng kỹ thuật tốt, giảm cường độ hao mòn của các chi tiết, kéo dài tuổi thọ của xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ngăn ngừa và phát hiện kịp thời các hư hỏng và sai lệch kỹ thuật để khắc phục, giữ gìn được hình thức bên ngoài.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Trong các nguyên nhân nêu dưới đây, nguyên nhân nào làm động cơ diesel không nổ?",
                "answers": [
                    {
                        "text": "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, tạp chất.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, không có tia lửa điện.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí và nước, không có tia lửa điện.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Gạt nước lắp trên ô tô phải đảm bảo yêu cầu an toàn kỹ thuật nào dưới đây?",
                "answers": [
                    {
                        "text": "Đầy đủ số lượng, lắp đặt chắc chắn, hoạt động bình thường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Lưỡi gạt không quá mòn, diện tích quét đảm bảo tầm nhìn của người lái.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Dây đai an toàn lắp trên ô tô phải đảm bảo yêu cầu an toàn kỹ thuật nào dưới đây?",
                "answers": [
                    {
                        "text": "Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm giữ chặt dây khi giật dây đột ngột.",
                        "isCorrect": true
                    },
                    {
                        "text": "Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm mở ra khi giật dây đột ngột.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Thế nào là động cơ 4 kỳ?",
                "answers": [
                    {
                        "text": "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 2 (hai) hành trình, trong đó có một lần sinh công.",
                        "isCorrect": false
                    },
                    {
                        "text": "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 4 (bốn) hành trình, trong đó có một lần sinh công.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Công dụng của hệ thống bôi trơn đối với động cơ ô tô?",
                "answers": [
                    {
                        "text": "Cung cấp một lượng dầu bôi trơn đủ và sạch dưới áp suất nhất định đi bôi trơn cho các chi tiết của động cơ để giảm ma sát, giảm mài mòn, làm kín, làm sạch, làm mát và chống gỉ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cung cấp một lượng nhiên liệu đầy đủ và sạch để cho động cơ ô tô hoạt động.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Niên hạn sử dụng của xe ô tô tải (tính bắt đầu từ năm sản xuất) là bao nhiêu năm?",
                "answers": [
                    {
                        "text": "15 năm.",
                        "isCorrect": false
                    },
                    {
                        "text": "20 năm.",
                        "isCorrect": false
                    },
                    {
                        "text": "25 năm.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Niên hạn sử dụng của xe ô tô chở người trên 9 chỗ ngồi (tính bắt đầu từ năm sản xuất) là bao nhiêu năm?",
                "answers": [
                    {
                        "text": "5 năm.",
                        "isCorrect": false
                    },
                    {
                        "text": "20 năm.",
                        "isCorrect": true
                    },
                    {
                        "text": "25 năm.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Hãy nêu công dụng của động cơ xe ô tô?",
                "answers": [
                    {
                        "text": "Khi làm việc, nhiệt năng được biến đổi thành cơ năng làm trục khủy động cơ quay, truyền lực đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.",
                        "isCorrect": true
                    },
                    {
                        "text": "Khi làm việc, cơ năng được biến đổi thành nhiệt năng và truyền đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Hãy nêu công dụng hệ thống truyền lực của xe ô tô?",
                "answers": [
                    {
                        "text": "Dùng để truyền mô men quay từ động cơ tới các bánh xe chủ động của xe ô tô.",
                        "isCorrect": true
                    },
                    {
                        "text": "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dùng để làm giảm tốc độ, dừng chuyển động của xe ô tô.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Hãy nêu công dụng ly hợp (côn) của xe ô tô?",
                "answers": [
                    {
                        "text": "Dùng để truyền mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình xe ô tô chuyển động.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của xe ô tô.",
                        "isCorrect": true
                    },
                    {
                        "text": "Dùng để truyền truyền động từ hộp số đến bánh xe chủ động của ô tô.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Hãy nêu công dụng hộp số của xe ô tô?",
                "answers": [
                    {
                        "text": "Truyền và tăng mô men xoắn giữa các trục vuông góc nhau, đảm bảo cho các bánh xe chủ động quay với tốc độ khác nhau khi sức cản chuyển động ở bánh xe hai bên không bằng nhau.",
                        "isCorrect": false
                    },
                    {
                        "text": "Truyền và thay đổi mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình ô tô chuyển động, chuyển số êm dịu, dễ điều khiển.",
                        "isCorrect": false
                    },
                    {
                        "text": "Truyền và thay đổi mô men từ động cơ đến bánh xe chủ động, cắt truyền động từ động cơ đến bánh xe chủ động, đảm bảo cho xe ô tô chuyển động lùi.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Hãy nêu công dụng hệ thống lái của xe ô tô?",
                "answers": [
                    {
                        "text": "Dùng để thay đổi mô men từ động cơ tới các bánh xe chủ động khi xe ô tô chuyển động theo hướng xác định.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dùng để thay đổi mô men giữa các trục vuông góc nhau khi xe ô tô chuyển động theo hướng xác định.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Hãy nêu công dụng hệ thống phanh của xe ô tô?",
                "answers": [
                    {
                        "text": "Dùng để giảm tốc độ, dừng chuyển động của xe ô tô và giữ cho xe ô tô đứng yên trên dốc.",
                        "isCorrect": true
                    },
                    {
                        "text": "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dùng để truyền hoặc ngắt truyền động từ động cơ đến bánh xe chủ động của xe ô tô.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Đèn phanh trên xe mô tô có tác dụng gì dưới đây?",
                "answers": [
                    {
                        "text": "Có tác dụng cảnh báo cho các xe phía sau biết xe đang giảm tốc để chủ động tránh hoặc giảm tốc để tránh va chạm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Có tác dụng định vị vào ban đêm với các xe từ phía sau tới để tránh va chạm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Ắc quy được trang bị trên xe ô tô có tác dụng gì dưới đây?",
                "answers": [
                    {
                        "text": "Giúp người lái xe kịp thời tạo xung lực tối đa lên hệ thống phanh trong khoảnh khắc đầu tiên của tình huống khẩn cấp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hỗ trợ người lái xe khởi hành ngang dốc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Để tích trữ điện năng, cung cấp cho các phụ tải khi máy phát chưa làm việc.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.24.33.png?alt=media&token=716ae803-d1dc-4d9f-b382-0df411286b5f",
                "answers": [
                    {
                        "text": "Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
                        "isCorrect": true
                    },
                    {
                        "text": "Áp suất lốp không đủ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đang hãm phanh tay.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cần kiểm tra động cơ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.26.12.png?alt=media&token=70b44875-b1cc-4d20-9673-2226edf8b063",
                "answers": [
                    {
                        "text": "Báo hiệu hệ thống chống bó cứng khi phanh bị lỗi.",
                        "isCorrect": false
                    },
                    {
                        "text": "Áp suất lốp không đủ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đang hãm phanh tay.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cần kiểm tra động cơ.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.27.48.png?alt=media&token=8f1685ab-23c5-4fac-bb33-db7206ec2446",
                "answers": [
                    {
                        "text": "Báo hiệu thiếu dầu phanh.",
                        "isCorrect": false
                    },
                    {
                        "text": "Áp suất lốp không đủ.",
                        "isCorrect": true
                    },
                    {
                        "text": "Đang hãm phanh tay.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sắp hết nhiên liệu.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.30.16.png?alt=media&token=359ac99c-2b6c-4695-98a3-8b73abd58112",
                "answers": [
                    {
                        "text": "Báo hiệu hệ thống chống bó cứng khi phanh bị lỗi.",
                        "isCorrect": true
                    },
                    {
                        "text": "Áp suất lốp không đủ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đang hãm phanh tay.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sắp hết nhiên liệu.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Khi khởi động xe ô tô số tự động có trang bị chìa khóa thông minh có cần đạp hết hành trình bàn đạp chân phanh hay không?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.33.59.png?alt=media&token=64c1008c-251f-4d3d-afb8-754244e4aad1",
                "answers": [
                    {
                        "text": "Phải đạp hết hành trình bàn đạp chân phanh.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không cần đạp phanh.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tùy từng trường hợp.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Máy phát điện được trang bị trên xe ô tô có tác dụng gì dưới đây?",
                "answers": [
                    {
                        "text": "Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy.",
                        "isCorrect": true
                    },
                    {
                        "text": "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hỗ trợ người lái xe khởi hành ngang dốc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Để tích trữ điện năng và cung cấp điện cho các phụ tải làm việc.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Dây đai an toàn được trang bị trên xe ô tô có tác dụng gì dưới đây?",
                "answers": [
                    {
                        "text": "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
                        "isCorrect": true
                    },
                    {
                        "text": "Để tích trữ điện năng và cung cấp điện cho các phụ tải làm việc.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Túi khí được trang bị trên xe ô tô có tác dụng gì dưới đây?",
                "answers": [
                    {
                        "text": "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm khả năng va đập của một số bộ phận cơ thể quan trọng với các vật thể trong xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hấp thụ một phần lực va đập lên người lái và hành khách.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 2 và ý 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây không tắt trong thời gian dài, báo hiệu tình trạng như thế nào của xe ô tô?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.35.13.png?alt=media&token=c7a19cf0-8b7c-49ef-9e4c-17efc1733f09",
                "answers": [
                    {
                        "text": "Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
                        "isCorrect": false
                    },
                    {
                        "text": "Áp suất lốp không đủ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đang hãm phanh tay.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hệ thống lái gặp trục trặc.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Trên xe ô tô có trang bị thiết bị như hình vẽ dưới đây có tác dụng gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.36.57.png?alt=media&token=c9690c74-af11-4234-80dd-e077dff2c295",
                "answers": [
                    {
                        "text": "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dùng để kích (hay nâng) xe ô tô.",
                        "isCorrect": true
                    },
                    {
                        "text": "Vặn ốc lắp bánh xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Trên xe ô tô có trang bị thiết bị như hình vẽ, dùng để làm gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.38.20.png?alt=media&token=474d2dc8-5e75-475a-94db-90e0ba46989b",
                "answers": [
                    {
                        "text": "Thay lốp xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chữa cháy.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.",
                        "isCorrect": true
                    },
                    {
                        "text": "Vặn ốc để tháo lắp bánh xe.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Trên xe ô tô có trang bị thiết bị như hình vẽ, dùng để làm gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.39.52.png?alt=media&token=53d40a8d-04c6-405b-9f5f-73b1cfd2d4d0",
                "answers": [
                    {
                        "text": "Thay lốp xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chữa cháy trong các trường hợp hỏa hoạn.",
                        "isCorrect": true
                    },
                    {
                        "text": "Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cầm máu cho người bị nạn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b8fa3b3508005c851376"
            },
            {
                "question": "Biển nào cấm các loại xe cơ giới đi vào, trừ xe gắn máy, mô tô hai bánh và các loại xe ưu tiên theo luật định?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.45.32.png?alt=media&token=d27b4cf3-339c-4c2d-96a7-22f0ccdd813c",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 1
            },
            {
                "question": "Biển nào cấm ô tô tải?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.48.44.png?alt=media&token=2a28c6c1-2efa-4d1a-a6b6-52ddc769e2fa",
                "answers": [
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 1
            },
            {
                "question": "Biển nào cấm máy kéo?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.50.37.png?alt=media&token=ffe4b8df-2176-4ead-8ac5-c702c69ad732",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 1
            },
            {
                "question": "Biển nào báo hiệu cấm xe mô tô ba bánh đi vào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.54.08.png?alt=media&token=200c4f70-6db6-4f65-b8d9-a137815186e8",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 1
            },
            {
                "question": "Biển nào dưới đây xe gắn máy được phép đi vào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-06%20at%2019.56.21.png?alt=media&token=2e0e0dba-ddb1-4ba3-ba24-319e148cd8b4",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 1
            },
            {
                "question": "Biển nào báo hiệu cấm xe mô tô hai bánh đi vào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.02.53.png?alt=media&token=7e4c9a4a-e196-404c-82ae-b7d9798e97fc",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 1
            },
            {
                "question": "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.04.52.png?alt=media&token=e9986779-9c6a-4b0a-80e3-c42060ce92fd",
                "answers": [
                    {
                        "text": "Không biển nào.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 1
            },
            {
                "question": "Biển nào cho phép ô tô con được vượt?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.06.54.png?alt=media&token=3fdef5f5-9573-40ed-b2cf-d46b13f79759",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 1
            },
            {
                "question": "Biển nào không cho phép ô tô con vượt?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.06.54.png?alt=media&token=3fdef5f5-9573-40ed-b2cf-d46b13f79759",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 1
            },
            {
                "question": "Biển nào cấm ô tô tải vượt?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.06.54.png?alt=media&token=3fdef5f5-9573-40ed-b2cf-d46b13f79759",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 1
            },
            {
                "question": "Biển nào cấm xe tải vượt?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.10.43.png?alt=media&token=f9d82186-5cc3-4ddd-b800-e61c1ded104b",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",

                "topic": 2
            },
            {
                "question": "Biển nào xe ô tô con được phép vượt?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.10.43.png?alt=media&token=f9d82186-5cc3-4ddd-b800-e61c1ded104b",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 2
            },
            {
                "question": "Biển nào cấm quay đầu xe?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.12.36.png?alt=media&token=8fe1d17c-fa17-4a56-8ce9-bf40d77db9fe",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không biển nào.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 2
            },
            {
                "question": "Biển nào cấm xe rẽ trái?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.12.36.png?alt=media&token=8fe1d17c-fa17-4a56-8ce9-bf40d77db9fe",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 2
            },
            {
                "question": "Khi gặp biển nào xe được rẽ trái?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.12.36.png?alt=media&token=8fe1d17c-fa17-4a56-8ce9-bf40d77db9fe",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không biển nào.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 2
            },
            {
                "question": "Biển nào cấm ô tô rẽ trái?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.18.32.png?alt=media&token=3b70651a-1b93-4d45-8c98-6315a5514ab2",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 2
            },
            {
                "question": "Biển nào cấm các phương tiện giao thông đường bộ rẽ phải?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.21.03.png?alt=media&token=efaee74c-91ad-4123-a38e-472ba95c6d2e",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 2
            },
            {
                "question": "Biển nào cấm các phương tiện giao thông đường bộ rẽ trái?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.22.32.png?alt=media&token=5dbff705-3f45-44f6-bbee-aea862b7981a",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 2
            },
            {
                "question": "Biển nào dưới đây cấm ô tô quay đầu?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.24.45.png?alt=media&token=409f6748-d1cf-4fa9-99ba-9f155b26d5e7",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không biển nào.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 2
            },
            {
                "question": "Biển nào dưới đây cấm ô tô quay đầu và rẽ phải?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.27.14.png?alt=media&token=b4e85bc5-1498-43de-8057-162e04e75c29",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 2
            },
            {
                "question": "Biển nào cấm xe taxi mà không cấm các phương tiện khác?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.30.50.png?alt=media&token=89130380-fcbb-4524-9b5a-19911d541507",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không biển nào.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 3

            },
            {
                "question": "Biển nào cho phép xe rẽ trái?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.33.23.png?alt=media&token=0046be64-a9b0-4e08-8c90-0e3394739044",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không biển nào.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 3
            },
            {
                "question": "Biển nào xe quay đầu không bị cấm?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.33.23.png?alt=media&token=0046be64-a9b0-4e08-8c90-0e3394739044",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 3
            },
            {
                "question": "Biển nào xe được phép quay đầu nhưng không được rẽ trái?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.41.14.png?alt=media&token=fe574495-40dc-4b07-aa96-3f35747ed663",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 3
            },
            {
                "question": "Biển nào là biển 'Cấm đi ngược chiều'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.48.21.png?alt=media&token=782efa14-7bff-4740-bfb7-10f475e7b676",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 3
            },
            {
                "question": "Biển nào dưới đây các phương tiện không được phép đi vào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.48.21.png?alt=media&token=782efa14-7bff-4740-bfb7-10f475e7b676",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",

                "topic": 3
            },
            {
                "question": "Gặp biển nào người lái xe không được đỗ xe vào ngày chẵn?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.51.01.png?alt=media&token=c4541e04-df32-4474-a653-4fec815c99cd",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 3
            },
            {
                "question": "Gặp biển nào người lái xe không được đỗ xe vào ngày lẻ?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.51.01.png?alt=media&token=c4541e04-df32-4474-a653-4fec815c99cd",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 3
            },
            {
                "question": "Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.53.45.png?alt=media&token=84db85ed-741f-4642-84f5-7f39cba1443e",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 3
            },
            {
                "question": "Biển nào cấm tất cả các loại xe cơ giới và thô sơ đi lại trên đường, trừ xe ưu tiên theo luật định (nếu đường vẫn cho xe chạy được)?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2010.57.28.png?alt=media&token=a7735695-399c-4803-82c2-4b9d6207b6b3",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 3
            },
            {
                "question": "Biển nào là biển 'Cấm xe chở hàng nguy hiểm'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.01.00.png?alt=media&token=1205e977-b063-4059-ae9d-2fffe938515b",
                "answers": [
                    {
                        "text": "Biển  1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 4
            },
            {
                "question": "Gặp biển nào xe xích lô được phép đi vào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.04.04.png?alt=media&token=b386bd83-9509-484b-9b17-e019b0f10348",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và biển 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 4
            },
            {
                "question": "Gặp biển nào xe lam, xe xích lô máy được phép đi vào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.04.04.png?alt=media&token=b386bd83-9509-484b-9b17-e019b0f10348",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 4
            },
            {
                "question": "Biển báo này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.07.31.png?alt=media&token=d141a491-6120-45e1-8591-4a04649d3330",
                "answers": [
                    {
                        "text": "Đường cấm súc vật vận tải hàng hóa.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đường cấm súc vật vận tải hành khách.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 4
            },
            {
                "question": "Biển báo này có ý nghĩa như thế nào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.09.58.png?alt=media&token=410cdb01-53e8-4327-90fb-1e1e322eb742",
                "answers": [
                    {
                        "text": "Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tốc độ tối thiểu cho phép về ban đêm cho các phương tiện là 70 km/h.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 4
            },
            {
                "question": "Khi gặp các biển này xe ưu tiên theo luật định (có tải trọng hay chiều cao toàn bộ vượt quá chỉ số ghi trên biển) có được phép đi qua hay không?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.11.29.png?alt=media&token=9a8cdb3a-eced-4899-bf6c-7d61ccf8e57f",
                "answers": [
                    {
                        "text": "Được phép.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 4
            },
            {
                "question": "Biển nào hạn chế chiều cao của xe và hàng?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.11.29.png?alt=media&token=9a8cdb3a-eced-4899-bf6c-7d61ccf8e57f",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 4
            },
            {
                "question": "Biển số 2 có ý nghĩa như thế nào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.11.29.png?alt=media&token=9a8cdb3a-eced-4899-bf6c-7d61ccf8e57f",
                "answers": [
                    {
                        "text": "Cho phép ô tô có tải trọng trục lớn hơn 7 tấn đi qua.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cho phép ô tô có tải trọng trên trục xe từ 7 tấn trở xuống đi qua.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 4
            },
            {
                "question": "Biển số 3 có ý nghĩa như thế nào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.11.29.png?alt=media&token=9a8cdb3a-eced-4899-bf6c-7d61ccf8e57f",
                "answers": [
                    {
                        "text": "Cấm các loại xe có tải trọng toàn bộ trên 10 tấn đi qua.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hạn chế khối lượng hàng hóa chở trên xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hạn chế tải trọng trên trục xe.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 4
            },
            {
                "question": "Biển nào cấm máy kéo kéo theo rơ moóc?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.21.24.png?alt=media&token=e1263e93-e7fc-40e7-b4f9-bd061c5d351d",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 4
            },
            {
                "question": "Khi gặp biển số 1, xe ô tô tải có được đi vào không?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.23.07.png?alt=media&token=bc92f1e1-c590-47ff-92b0-1a7bcde1382b",
                "answers": [
                    {
                        "text": "Được đi vào.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không được đi vào.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 5
            },
            {
                "question": "Biển nào không có hiệu lực đối với ô tô tải không kéo moóc?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.25.30.png?alt=media&token=81177d1a-86ee-4531-bec8-8c805b31996a",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 5
            },
            {
                "question": "Biển nào cấm máy kéo?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.27.54.png?alt=media&token=da4cd839-254a-434e-945e-8731bdb3d14b",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 5
            },
            {
                "question": "Khi gặp biển này, xe mô tô ba bánh có được phép rẽ trái hoặc rẽ phải hay không?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.29.40.png?alt=media&token=4e123933-5855-4bd6-8ea5-5456dd594d59",
                "answers": [
                    {
                        "text": "Được phép.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 5
            },
            {
                "question": "Biển này có hiệu lực đối với xe mô tô hai, ba bánh không?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.29.40.png?alt=media&token=4e123933-5855-4bd6-8ea5-5456dd594d59",
                "answers": [
                    {
                        "text": "Có.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 5
            },
            {
                "question": "Biển này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.29.40.png?alt=media&token=4e123933-5855-4bd6-8ea5-5456dd594d59",
                "answers": [
                    {
                        "text": "Cấm xe cơ giới (trừ xe ưu tiên theo luật định) đi thẳng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cấm xe ô tô và mô tô (trừ xe ưu tiên theo luật định) đi về bên trái và bên phải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hướng trái và phải không cấm xe cơ giới.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 5
            },
            {
                "question": "Biển phụ đặt dưới biển cấm bóp còi có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.33.58.png?alt=media&token=dd5eabca-8793-43ad-a796-7b91cf87947c",
                "answers": [
                    {
                        "text": "Báo khoảng cách đến nơi cấm bóp còi.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.",
                        "isCorrect": true
                    },
                    {
                        "text": "Báo cấm dùng còi có độ vang xa 500m.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 5
            },
            {
                "question": "Chiều dài đoạn đường 500 m từ nơi đặt biển này, người lái xe có được phép bấm còi không?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.33.58.png?alt=media&token=dd5eabca-8793-43ad-a796-7b91cf87947c",
                "answers": [
                    {
                        "text": "Được phép.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 5
            },
            {
                "question": "Biển nào xe mô tô hai bánh được đi vào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.38.29.png?alt=media&token=c44c1e20-b2ae-41e4-957f-501ffef8393e",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 5
            },
            {
                "question": "Biển nào xe mô tô hai bánh không được đi vào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.38.29.png?alt=media&token=c44c1e20-b2ae-41e4-957f-501ffef8393e",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377",
                "topic": 5
            },
            {
                "question": "Ba biển này có hiệu lực như thế nào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.38.29.png?alt=media&token=c44c1e20-b2ae-41e4-957f-501ffef8393e",
                "answers": [
                    {
                        "text": "Cấm các loại xe ở biển phụ đi vào.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cấm các loại xe cơ giới đi vào trừ loại xe ở biển phụ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu chiều dài đoạn đường phải giữ cự ly tối thiểu giữa hai xe?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.42.43.png?alt=media&token=5168adc3-911e-4a14-a2f9-8c25f8194e03",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu khoảng cách thực tế từ nơi đặt biển đến nơi cần cự ly tối thiểu giữa hai xe?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.42.43.png?alt=media&token=5168adc3-911e-4a14-a2f9-8c25f8194e03",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.45.40.png?alt=media&token=725d8f5c-4567-4998-8075-aa3d075cc984",
                "answers": [
                    {
                        "text": "Cấm dừng xe về hướng bên trái.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cấm đỗ xe và cấm dừng xe theo hướng bên phải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Được phép đỗ xe và dừng xe theo hướng bên phải.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Theo hướng bên phải có được phép đỗ xe, dừng xe không?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.45.40.png?alt=media&token=725d8f5c-4567-4998-8075-aa3d075cc984",
                "answers": [
                    {
                        "text": "Không được phép.",
                        "isCorrect": true
                    },
                    {
                        "text": "Được phép.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Gặp biển này, xe ô tô sơ mi rơ moóc có chiều dài toàn bộ kể cả xe, moóc và hàng lớn hơn trị số ghi trên biển có được phép đi vào hay không?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.50.12.png?alt=media&token=9f801156-07d0-4113-beda-2304337b47d7",
                "answers": [
                    {
                        "text": "Không được phép.",
                        "isCorrect": true
                    },
                    {
                        "text": "Được phép.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Xe ô tô chở hàng vượt quá phía trước và sau thùng xe, mỗi phía quá 10% chiều dài toàn bộ thân xe, tổng chiều dài xe (cả hàng) từ trước đến sau nhỏ hơn trị số ghi trên biển thì có được phép đi vào không?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.50.12.png?alt=media&token=9f801156-07d0-4113-beda-2304337b47d7",
                "answers": [
                    {
                        "text": "Được phép.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được phép.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.52.26.png?alt=media&token=a0c4e96a-af80-4709-8185-69911281ae79",
                "answers": [
                    {
                        "text": "Cấm ô tô buýt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cấm ô tô chở khách.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cấm ô tô con.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.54.07.png?alt=media&token=0146ae82-4d70-45dc-b8c3-11df6d6606a5",
                "answers": [
                    {
                        "text": "Hạn chế chiều cao của xe và hàng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hạn chế chiều ngang của xe và hàng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hạn chế chiều dài của xe và hàng.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào là biển 'Tốc độ tối đa cho phép về ban đêm'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.55.41.png?alt=media&token=e51211b5-f66e-40d0-9644-62b2faf83ed5",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả 2 biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển báo nào báo hiệu bắt đầu đoạn đường vào phạm vi khu dân cư, các phương tiện tham gia giao thông phải tuân theo các quy định đi đường được áp dụng ở khu đông dân cư?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.57.27.png?alt=media&token=e8001ae2-f7ce-4fbb-ae58-ed6171646be0",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu hạn chế tốc độ của phương tiện không vượt quá trị số ghi trên biển?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2011.58.31.png?alt=media&token=d84c7178-c95c-4d6c-ae88-208b3f0fbdd5",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Trong các biển báo dưới đây biển nào báo hiệu 'Hết đường cao tốc'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2012.00.11.png?alt=media&token=a59ceb30-3ab9-4a33-bd21-b20e5d9a2df1",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Số 50 ghi trên biển báo dưới đây có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2012.01.56.png?alt=media&token=44078524-e190-4b64-8de4-3be6873eebb8",
                "answers": [
                    {
                        "text": "Tốc độ tối đa các xe cơ giới được phép chạy.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tốc độ tối thiểu các xe cơ giới được phép chạy.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Trong các biển dưới đây biển nào chỉ dẫn bắt đầu đường cao tốc?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2012.03.58.png?alt=media&token=7a4a5a7d-61bb-4f83-a8c4-37e7074663ec",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả biển 1 và biển 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển báo dưới đây có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2012.06.23.png?alt=media&token=47b3122a-bc9d-436b-b847-36de31525da0",
                "answers": [
                    {
                        "text": "Báo hiệu tốc độ tối đa cho phép các xe cơ giới chạy.",
                        "isCorrect": false
                    },
                    {
                        "text": "Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào người lái xe phải nhường đường cho người đi bộ?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2012.09.25.png?alt=media&token=fac3b586-393b-4269-9cd9-f03a2f1e2046",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2012.09.25.png?alt=media&token=fac3b586-393b-4269-9cd9-f03a2f1e2046",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Đường dành cho xe thô sơ'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.14.38.png?alt=media&token=3c6a60d1-2a1a-40ac-8ff8-8277b773b733",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu sắp đến chỗ giao nhau nguy hiểm?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.16.39.png?alt=media&token=390f9241-39f9-48ca-86f8-ece7ce3bc2d4",
                "answers": [
                    {
                        "text": "Biển 1 ",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Giao nhau với đường sắt có rào chắn'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.16.39.png?alt=media&token=390f9241-39f9-48ca-86f8-ece7ce3bc2d4",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Giao nhau có tín hiệu đèn'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.16.39.png?alt=media&token=390f9241-39f9-48ca-86f8-ece7ce3bc2d4",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu nguy hiểm giao nhau với đường sắt?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.21.56.png?alt=media&token=bc1a2f6f-9613-49f0-8eb7-cc22a5487ac8",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu đường sắt giao nhau với đường bộ không có rào chắn?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.23.27.png?alt=media&token=d3946214-74ae-40b2-b242-2cf8c062cf45",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu sắp đến chỗ giao nhau giữa đường bộ và đường sắt?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.25.32.png?alt=media&token=45c98148-4a4a-498a-ba1d-f72437689f02",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Cửa chui'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.28.11.png?alt=media&token=d16d4699-692a-409f-ade1-feb25766a075",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Hai biển này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.29.35.png?alt=media&token=81b9eeba-21ae-41ae-bae8-4652c87011a2",
                "answers": [
                    {
                        "text": "Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn.",
                        "isCorrect": true
                    },
                    {
                        "text": "Để báo trước sắp đến vị trí giao cắt đường bộ với đường sắt cùng mức, không vuông góc và không có người gác, không có rào chắn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nơi đường sắt giao nhau với đường bộ.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Nơi đường sắt giao vuông góc với đường bộ'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.30.48.png?alt=media&token=d1239320-df73-4493-bfea-6a146adbe6a7",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Các biển này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.32.44.png?alt=media&token=dc0fcd12-034b-4cbe-beb7-b751147bb416",
                "answers": [
                    {
                        "text": "Nơi đường sắt giao nhau với đường bộ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nơi đường sắt giao vuông góc với đường bộ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Hết đoạn đường ưu tiên'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.34.10.png?alt=media&token=a875500b-4216-4037-8acb-afa3fabde6ea",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu, chỉ dẫn xe đi trên đường này được quyền ưu tiên qua nơi giao nhau?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.38.06.png?alt=media&token=b0d453c3-7084-4249-9eb3-d1eb17fb63a9",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Giao nhau với đường không ưu tiên'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.38.06.png?alt=media&token=b0d453c3-7084-4249-9eb3-d1eb17fb63a9",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Giao nhau với đường ưu tiên'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.38.06.png?alt=media&token=b0d453c3-7084-4249-9eb3-d1eb17fb63a9",
                "answers": [
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Đường bị thu hẹp'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.43.40.png?alt=media&token=b67532c4-984c-4823-be5e-21505fbafdbb",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Khi gặp biển nào, người lái xe phải giảm tốc độ, chú ý xe đi ngược chiều, xe đi ở phía đường bị hẹp phải nhường đường cho xe đi ngược chiều?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.45.40.png?alt=media&token=6f574221-550f-4256-b51f-689c5e5fe836",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Giao nhau với đường ưu tiên'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.49.33.png?alt=media&token=54235307-db70-4679-b118-3c3c14c15ffd",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Đường giao nhau' của các tuyến đường cùng cấp?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.49.33.png?alt=media&token=54235307-db70-4679-b118-3c3c14c15ffd",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Giao nhau với đường không ưu tiên'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.49.33.png?alt=media&token=54235307-db70-4679-b118-3c3c14c15ffd",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Đường hai chiều'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.55.34.png?alt=media&token=ad31a86f-6c5a-4e4b-a52b-73a271061666",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu phải giảm tốc độ, nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.55.34.png?alt=media&token=ad31a86f-6c5a-4e4b-a52b-73a271061666",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào chỉ dẫn 'Được ưu tiên qua đường hẹp'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2015.55.34.png?alt=media&token=ad31a86f-6c5a-4e4b-a52b-73a271061666",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển2 và 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Đường đôi'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.03.04.png?alt=media&token=dd1c1f3e-047b-4f9c-a66f-72d9f7ee5ed4",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Đường đôi'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.04.03.png?alt=media&token=5c6d2f0b-dac2-4bc8-a301-56547e165d98",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Kết thúc Đường đôi'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.05.20.png?alt=media&token=85bf2129-e49e-4258-a3b8-5bba6a4ba355",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Giao nhau với đường 2 chiều '?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.07.01.png?alt=media&token=55da49de-0127-4e40-9216-ce7055f45699",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Đường 2 chiều '?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.08.12.png?alt=media&token=5919eaac-1e13-4fab-8462-82fc48ff4758",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Giao nhau với đường 2 chiều '?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.09.20.png?alt=media&token=f56e041a-ab04-494e-97b6-b77daa05c6f7",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Chú ý chướng ngại vật '?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.10.42.png?alt=media&token=da55abf8-29e6-493e-8e29-1e862e7e06e7",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả 3 biển",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào chỉ dẫn cho người tham gia giao thông biết vị trí và khoảng cách có làn đường cứu nạn hay làn thoát xe khẩn cấp?        ",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.12.21.png?alt=media&token=23917631-23ec-4351-b716-b6ff5a05458a",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 1 và 2",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Đường hầm'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.13.23.png?alt=media&token=7433ce0b-1c33-471b-8f8d-b68e09e5428c",
                "answers": [
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào dưới đây là biển 'Cầu hẹp'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.14.59.png?alt=media&token=9257f167-6120-4e1e-bc95-f4593fe837a8",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào dưới đây là biển 'Cầu quay - cầu sắt'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.14.59.png?alt=media&token=9257f167-6120-4e1e-bc95-f4593fe837a8",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào dưới đây là biển 'Kè, vực sâu phía trước'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.18.48.png?alt=media&token=5523f866-59ba-437e-8c94-68fa82976afa",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào dưới đây là biển 'Kè, vực sâu phía bên trái'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.18.48.png?alt=media&token=5523f866-59ba-437e-8c94-68fa82976afa",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào dưới đây là biển 'Kè, vực sâu phía bên trái'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.18.48.png?alt=media&token=5523f866-59ba-437e-8c94-68fa82976afa",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào dưới đây là biển 'Đường trơn'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.22.14.png?alt=media&token=03272499-824f-4ad2-903d-6fe4b07ff5bf",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào dưới đây là biển 'Lề đường nguy hiểm'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.23.17.png?alt=media&token=15136116-c4d4-48de-8f03-00298e4f2fb4",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào sau đây báo trước gần tới đoạn đường đang tiến hành thi công?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.24.29.png?alt=media&token=92e6923c-b3db-4545-ac9c-c7c25e73fdcf",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3",
                        "isCorrect": false
                    },
                    {
                        "text": "Không biển nào.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào sau đây cảnh báo nguy hiểm đoạn đường thường xảy ra tai nạn?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.26.14.png?alt=media&token=056d0ce8-a7db-42b6-9172-24bf5c6bf43b",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào dưới đây báo hiệu đoạn đường hay xảy ra ùn tắc giao thông?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.27.33.png?alt=media&token=bd9cfc88-7341-46cb-bace-c606448fb743",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả 3 biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Gặp biển nào người tham gia giao thông phải đi chậm và thận trọng đề phòng khả năng xuất hiện và di chuyển bất ngờ của trẻ em trên mặt đường?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.29.36.png?alt=media&token=8deb7ebf-0c38-4116-b4bc-3227cd662f95",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào chỉ dẫn nơi bắt đầu đoạn đường dành cho người đi bộ?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.31.17.png?alt=media&token=760f239e-29cb-4442-9751-4ee17f1e0e68",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào dưới đây báo hiệu gần đến đoạn đường thường có trẻ em đi ngang qua?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.34.37.png?alt=media&token=ac53e3f9-6d91-4032-8602-e018931eb5bb",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả 3 biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Gặp biển nào dưới đây người tham gia giao thông cần phải điều chỉnh tốc độ xe chạy cho thích hợp, đề phòng gió ngang thổi mạnh gây lật xe?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.37.04.png?alt=media&token=91dc6a24-da19-424b-8a65-f00debcdd677",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào sau đây là biển 'Dốc xuống nguy hiểm'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.40.17.png?alt=media&token=64433853-ef36-477d-8a4f-0b6bba5b53dd",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào sau đây là biển 'Dốc xuống nguy hiểm'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.40.17.png?alt=media&token=64433853-ef36-477d-8a4f-0b6bba5b53dd",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển báo này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.44.36.png?alt=media&token=181acceb-5ef6-4c91-aa33-0d10e1cf8d6b",
                "answers": [
                    {
                        "text": "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.",
                        "isCorrect": true
                    },
                    {
                        "text": "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên trái khi đường cong vòng sang phải.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển báo này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.45.58.png?alt=media&token=95d9353e-2b87-428c-8cee-e041279c18ca",
                "answers": [
                    {
                        "text": "Báo trước đoạn đường trơn trượt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Báo trước đoạn đường có gió ngang.",
                        "isCorrect": false
                    },
                    {
                        "text": "Báo trước sắp đến bến phà.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển báo này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.48.00.png?alt=media&token=599ad5af-0159-4a61-908a-e77825b3a608",
                "answers": [
                    {
                        "text": "Báo hiệu đường có ổ gà, lồi lõm.",
                        "isCorrect": true
                    },
                    {
                        "text": "Báo hiệu đường có gồ giảm tốc phía trước.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển báo này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.49.48.png?alt=media&token=b9e0abb2-5942-42a2-9bef-6473e2cc7b70",
                "answers": [
                    {
                        "text": "Báo hiệu đường có ổ gà, lồi lõm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Báo hiệu đường có gồ giảm tốc phía trước.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển báo dưới đây có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.51.22.png?alt=media&token=53f25b96-6ebf-4e91-b4f4-796b85f60b6e",
                "answers": [
                    {
                        "text": "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm.",
                        "isCorrect": true
                    },
                    {
                        "text": "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Các biển báo này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.52.21.png?alt=media&token=74cfb542-16ed-4e1e-b507-c7d8c78b8011",
                "answers": [
                    {
                        "text": "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
                        "isCorrect": true
                    },
                    {
                        "text": "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Các biển báo này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.53.45.png?alt=media&token=8cb2c6a9-4e7b-4daa-945f-d059bae50cf6",
                "answers": [
                    {
                        "text": "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Gặp biển báo này người lái xe phải xử lý thế nào?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.55.48.png?alt=media&token=eac12248-3714-48c1-8c0f-4f83fc964f9f",
                "answers": [
                    {
                        "text": "Đi chậm, quan sát và dừng lại nếu gặp gia súc trên đường.",
                        "isCorrect": true
                    },
                    {
                        "text": "Bấm còi to để gia súc tránh đường và nhanh chóng di chuyển qua đoạn đường có gia súc.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển báo này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2016.58.07.png?alt=media&token=acae449e-3aee-4604-8f17-293f72b85a3a",
                "answers": [
                    {
                        "text": "Báo hiệu khu vực nguy hiểm thường xuyên có sét đánh.",
                        "isCorrect": false
                    },
                    {
                        "text": "Báo hiệu khu vực có đường dây điện cắt ngang phía trên tuyến đường.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu các phương tiện phải đi đúng làn đường quy định và tuân thủ tốc độ tối đa cho phép?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.00.05.png?alt=media&token=e92ed243-0f26-4d46-b448-590233725be6",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu các phương tiện phải tuân thủ tốc độ tối đa cho phép trên từng làn đường?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.00.05.png?alt=media&token=e92ed243-0f26-4d46-b448-590233725be6",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Đường dành cho xe ô tô'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.03.18.png?alt=media&token=ca862242-e65d-486e-896c-930d5b5f0021",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Hết đường dành cho xe ô tô'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.03.18.png?alt=media&token=ca862242-e65d-486e-896c-930d5b5f0021",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Khi gặp biển nào thì các phương tiện không được đi vào, trừ ô tô và mô tô?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.03.18.png?alt=media&token=ca862242-e65d-486e-896c-930d5b5f0021",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển này có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.07.29.png?alt=media&token=99ff4f8f-1df9-45b7-bb85-53d6c061e1fe",
                "answers": [
                    {
                        "text": "Chỉ hướng đi phải theo.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phải theo.",
                        "isCorrect": true
                    },
                    {
                        "text": "Chỉ hướng đường phải theo.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào (đặt trước ngã ba, ngã tư) cho phép xe được rẽ sang hướng khác?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.08.51.png?alt=media&token=51b31b7f-1607-4f31-bf97-e8ae7ad60b35",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không biển nào.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Hướng đi thẳng phải theo'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.11.14.png?alt=media&token=c812a628-18a8-4f1e-8458-b574c57a0ac5",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Đường 1 chiều'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.11.14.png?alt=media&token=c812a628-18a8-4f1e-8458-b574c57a0ac5",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Trong các biển dưới đây biển nào là biển 'Hết tốc độ tối đa cho phép'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.13.11.png?alt=media&token=ed9cffaa-4184-491e-8403-55101c5410d3",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Hiệu lực của biển 'Tốc độ tối đa cho phép' hết tác dụng khi gặp biển nào dưới đây?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.13.11.png?alt=media&token=ed9cffaa-4184-491e-8403-55101c5410d3",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 2",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Trong các biển dưới đây biển nào là biển 'Hết tốc độ tối thiểu'?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.13.11.png?alt=media&token=ed9cffaa-4184-491e-8403-55101c5410d3",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào dưới đây báo hiệu hết cấm vượt?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.16.03.png?alt=media&token=d4d7b6ce-dfe0-4074-acbf-9b077644e6a0",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào dưới đây báo hiệu hết mọi lệnh cấm?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.16.03.png?alt=media&token=d4d7b6ce-dfe0-4074-acbf-9b077644e6a0",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào cho phép được quay đầu xe đi theo hướng ngược lại khi đặt biển trước ngã ba, ngã tư?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.18.28.png?alt=media&token=b2e184b6-0d3e-46e4-afe5-1f675dc2476d",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không biển nào.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào không cho phép rẽ phải?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.18.28.png?alt=media&token=b2e184b6-0d3e-46e4-afe5-1f675dc2476d",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không biển nào.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Khi đến chỗ giao nhau, gặp biển nào thì người lái xe không được cho xe đi thẳng, phải rẽ sang hướng khác?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.18.28.png?alt=media&token=b2e184b6-0d3e-46e4-afe5-1f675dc2476d",
                "answers": [
                    {
                        "text": "Biển 1 và 2",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả 3 biển .",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào cho phép quay đầu xe?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.23.08.png?alt=media&token=de2eed8a-75b9-4415-ab38-eaf03cdd488f",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào chỉ dẫn tên đường trên các tuyến đường đối ngoại?",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.25.36.png?alt=media&token=ee47d29c-4da4-451c-b91f-4ab60ad55d98",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển số 1 có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.28.10.png?alt=media&token=cef74e02-7588-4c16-899f-7607ec59f33c",
                "answers": [
                    {
                        "text": "Biển chỉ dẫn hết cấm đỗ xe theo giờ trong khu vực.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển chỉ dẫn hết hiệu lực khu vực đỗ xe trên các tuyến đường đối ngoại.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển số 3 có ý nghĩa gì?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.29.42.png?alt=media&token=ce7dcd8e-ee89-41a8-86ea-8263b8914a37",
                "answers": [
                    {
                        "text": "Biển chỉ dẫn khu vực cấm đỗ xe trên các tuyến đường đối ngoại.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển hạn chế tốc độ tối đa trong khu vực.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển chỉ dẫn hết hiệu lực khu vực cấm đỗ xe theo giờ trên các tuyến đường đối ngoại.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Đường phía trước có làn đường dành cho ô tô khách'?",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.32.38.png?alt=media&token=1bab669f-a040-42b3-aa39-8705d0a51265",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Rẽ ra đường có làn đường dành cho ô tô khách'?",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.32.38.png?alt=media&token=1bab669f-a040-42b3-aa39-8705d0a51265",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào đặt trên đường chính trước khi đến nơi đường giao nhau để rẽ vào đường cụt?",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không biển nào.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.38.01.png?alt=media&token=4ec4941e-ffa0-4d20-82bc-340c7b8a93f9",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào chỉ dẫn cho người đi bộ sử dụng cầu vượt qua đường?",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không biển nào.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.42.13.png?alt=media&token=b5f0e224-fe15-4ef2-a02c-35150850e94c",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường?",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả hai biển.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không biển nào.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.42.13.png?alt=media&token=b5f0e224-fe15-4ef2-a02c-35150850e94c",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Nơi đỗ xe dành cho người khuyết tật'?",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.43.57.png?alt=media&token=ce252f5e-5e71-410b-9298-71d72c10adc3",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Gặp biển báo này, người lái xe phải đỗ xe như thế nào?",
                "answers": [
                    {
                        "text": "Đỗ từ 1/2 thân xe trở lên trên hè phố.",
                        "isCorrect": true
                    },
                    {
                        "text": "Đỗ xe hoàn toàn trên hè phố.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đỗ xe hoàn toàn dưới lòng đường.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.46.37.png?alt=media&token=a56262b5-69b6-4f91-a383-22de0ad60088",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Gặp biển báo này, người tham gia giao thông phải xử lý như thế nào?",
                "answers": [
                    {
                        "text": "Dừng xe tại khu vực có trạm Cảnh sát giao thông.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tiếp tục lưu thông với tốc độ bình thường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.49.17.png?alt=media&token=b7f58971-9e04-4b37-9703-3b48233a16ad",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Gặp biển báo dưới đây, người lái xe có bắt buộc phải chạy vòng theo đảo an toàn theo hướng mũi tên khi muốn chuyển hướng hay không?",
                "answers": [
                    {
                        "text": "Bắt buộc.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không bắt buộc.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.52.38.png?alt=media&token=9c8b5e8d-3bbe-4434-917e-72c4cd4f8829",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào dưới đây chỉ dẫn địa giới hành chính giữa các thành phố, tỉnh, huyện?",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.55.51.png?alt=media&token=71f91543-b34d-457c-9cb4-06be7a380a1e",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Cầu vượt liên thông'?",
                "answers": [
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba biển.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2017.59.52.png?alt=media&token=05fb450d-3f6f-47e5-9206-75a1917303cb",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển số 1 có ý nghĩa gì?",
                "answers": [
                    {
                        "text": "Đi thẳng hoặc rẽ trái trên cầu vượt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đi thẳng hoặc rẽ phải trên cầu vượt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Báo hiệu cầu vượt liên thông.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.12.18.png?alt=media&token=92680131-f031-4431-97a8-5821e322750c",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu 'Tuyến đường cầu vượt cắt qua'?",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2 và 3.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.13.42.png?alt=media&token=4a5fa7ce-8e47-42c6-8bea-bdc500fa2009",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển báo dưới đây có ý nghĩa gì?",
                "answers": [
                    {
                        "text": "Chỉ dẫn khoảng cách đến làn đường cứu nạn (làn thoát xe khẩn cấp).",
                        "isCorrect": true
                    },
                    {
                        "text": "Báo hiệu đường cụt phía trước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Báo hiệu nút giao gần nhất phía trước.",
                        "isCorrect": false
                    },
                    {
                        "text": "Báo hiệu trạm dừng nghỉ phía trước.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.15.31.png?alt=media&token=f2504048-5c18-4c6d-abfa-0e71be4a43ea",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Tại đoạn đường có biển 'Làn đường dành riêng cho từng loại xe' dưới đây, các phương tiện có được phép chuyển sang làn khác để đi theo hành trình mong muốn khi đến gần nơi đường bộ giao nhau hay không?",
                "answers": [
                    {
                        "text": "Không được phép chuyển sang làn khác, chỉ được đi trong làn quy định theo biển.",
                        "isCorrect": true
                    },
                    {
                        "text": "Được phép chuyển sang làn khác.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.17.24.png?alt=media&token=7f95c8da-6f17-434a-ab5b-035d5884cdc1",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
                "answers": [
                    {
                        "text": "Không.",
                        "isCorrect": false
                    },
                    {
                        "text": "Có.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.19.03.png?alt=media&token=66b4aabe-2c7e-4587-a22d-082f0ff2f455",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
                "answers": [
                    {
                        "text": "Có.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.25.10.png?alt=media&token=21fabb6d-2e56-4c79-9679-d5e041160108",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển nào báo hiệu kết thúc đường cao tốc?",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.27.49.png?alt=media&token=b0bb9fae-7dbb-4565-be0a-5d3f81792aa7",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển này có ý nghĩa gì?",
                "answers": [
                    {
                        "text": "Chỉ dẫn vị trí nhập làn cách trạm thu phí 250 m.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ dẫn sắp đến vị trí nhập làn xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ dẫn vị trí nhập làn xe cách 250 m.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.29.16.png?alt=media&token=2528430b-6c5c-496a-b3a3-3e93a3305e75",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển này có ý nghĩa gì?",
                "answers": [
                    {
                        "text": "Bắt đầu đường cao tốc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ dẫn địa giới đường cao tốc, chiều dài đường cao tốc.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tên và ký hiệu đường cao tốc, giá trị hạn chế tốc độ tối đa và tối thiểu.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 3.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.30.55.png?alt=media&token=87278be6-c435-46c0-8ab9-f73230869d0f",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Ý nghĩa các biểu tượng ghi trên biển chỉ dẫn là gì?",
                "answers": [
                    {
                        "text": "Xăng dầu, ăn uống, thông tin, sửa chữa xe.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xăng dầu, ăn uống, nhà nghỉ, sửa chữa xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xăng dầu, ăn uống, cấp cứu, sửa chữa xe.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.32.37.png?alt=media&token=aaa7a6d8-dc56-4e93-9499-2f7890da7daf",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Biển này có ý nghĩa gì?",
                "answers": [
                    {
                        "text": "Chỉ dẫn đến trạm kiểm tra tải trọng xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ dẫn hướng rẽ vào nơi đặt trạm kiểm tra tải trọng xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe cách 750 m.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.34.52.png?alt=media&token=7b2c2fcd-0e6f-42d6-ac24-69a6730bf24d",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên trái để tránh chướng ngại vật?",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.38.23.png?alt=media&token=775dcc72-9e5e-4f79-9a2f-0a2f30f6cb23",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên phải để tránh chướng ngại vật?",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.38.23.png?alt=media&token=775dcc72-9e5e-4f79-9a2f-0a2f30f6cb23",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Trên đường cao tốc, gặp biển nào thì người lái xe đi được cả hai hướng (bên trái hoặc bên phải) để tránh chướng ngại vật?",
                "answers": [
                    {
                        "text": "Biển 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.38.23.png?alt=media&token=775dcc72-9e5e-4f79-9a2f-0a2f30f6cb23",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Trên đường cao tốc, gặp biển nào người lái xe phải chú ý đổi hướng đi khi sắp vào đường cong nguy hiểm?",
                "answers": [
                    {
                        "text": "Biển 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 1 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Biển 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Biển 3.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.40.42.png?alt=media&token=89f232af-15cd-4648-a545-e5e8d3614dca",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Vạch mũi tên chỉ hướng trên mặt đường nào dưới đây cho phép xe chỉ được đi thẳng và rẽ phải?",
                "answers": [
                    {
                        "text": "Vạch 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vạch 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vạch 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Vạch 1 và 2.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.42.44.png?alt=media&token=0254ec6b-a070-4493-9ccc-eaefbf4c699c",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Vạch kẻ đường nào dưới đây là vạch phân chia các làn xe cùng chiều?",
                "answers": [
                    {
                        "text": "Vạch 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vạch 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vạch 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vạch 1 và 2.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.44.53.png?alt=media&token=1e7085e9-7da3-4cd8-a1d4-97ae61fe50b8",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường), xe không được lấn làn, không được đè lên vạch?",
                "answers": [
                    {
                        "text": "Vạch 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vạch 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Vạch 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả 3 vạch.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.46.27.png?alt=media&token=43dc12b6-e3aa-437c-b46f-b48e55612ee2",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường)?",
                "answers": [
                    {
                        "text": "Vạch 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vạch 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vạch 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vạch 1 và 3.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.47.46.png?alt=media&token=109891f5-a2b9-4ac6-9cb4-72940f0f06ff",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Các vạch dưới đây có tác dụng gì?",
                "answers": [
                    {
                        "text": "Phân chia hai chiều xe chạy ngược chiều nhau.",
                        "isCorrect": true
                    },
                    {
                        "text": "Phân chia các làn xe chạy cùng chiều nhau.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.49.45.png?alt=media&token=c80e339d-a5a6-4330-8561-7c1a64cabc02",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Các vạch dưới đây có tác dụng gì?",
                "answers": [
                    {
                        "text": "Phân chia hai chiều xe chạy ngược chiều nhau.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phân chia các làn xe chạy cùng chiều nhau.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.51.01.png?alt=media&token=66a4c731-8338-4937-81e3-95c7fe1d4f04",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Khi gặp vạch kẻ đường nào các xe được phép đè vạch?",
                "answers": [
                    {
                        "text": "Vạch 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vạch 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vạch 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vạch 1 và vạch 3.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.52.17.png?alt=media&token=4b55ebb8-93f7-4460-9df8-11a424215db3",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Vạch dưới đây có tác dụng gì?",
                "answers": [
                    {
                        "text": "Để xác định làn đường.",
                        "isCorrect": false
                    },
                    {
                        "text": "Báo hiệu người lái xe chỉ được phép đi thẳng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dùng để xác định khoảng cách giữa các phương tiện trên đường.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.53.21.png?alt=media&token=f3f97ef7-fc4c-4285-8765-da0eb97c0dcb",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Vạch dưới đây có ý nghĩa gì?",
                "answers": [
                    {
                        "text": "Báo cho người điều khiển không được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
                        "isCorrect": false
                    },
                    {
                        "text": "Báo hiệu sắp đến chỗ có bố trí vạch đi bộ qua đường.",
                        "isCorrect": true
                    },
                    {
                        "text": "Dùng để xác định khoảng cách giữa các phương tiện trên đường.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.57.06.png?alt=media&token=c20dd15e-d26d-464c-8c8f-926b25908c9b",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Vạch dưới đây có ý nghĩa gì?",
                "answers": [
                    {
                        "text": "Vị trí dừng xe của các phương tiện vận tải hành khách công cộng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Báo cho người điều khiển được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dùng để xác định vị trí giữa các phương tiện trên đường.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2018.57.11.png?alt=media&token=3d9bbde1-4b66-481c-9f52-a472a4711303",
                "category": "65e6b9153b3508005c851377"
            },
            {
                "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe tải, xe khách, xe con, mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe tải, mô tô, xe khách, xe con.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe khách, xe tải, xe con, mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Mô tô, xe khách, xe tải, xe con.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.09.05.png?alt=media&token=2398dfbc-0de3-4806-b60f-bd55e9174258",
                "category": "65e6b9383b3508005c851378",
                "topic": 1
            },
            {
                "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.00.25.png?alt=media&token=d29248f4-e153-4603-925d-3607abf646da",
                "answers": [
                    {
                        "text": "Xe công an, xe con, xe tải, xe khách.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe công an, xe khách, xe con, xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe công an, xe tải, xe khách, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con, xe công an, xe tải, xe khách.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 1
            },
            {
                "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.00.30.png?alt=media&token=38327d57-2f78-4874-880f-880aef4cafec",
                "answers": [
                    {
                        "text": "Xe tải, xe công an, xe khách, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe công an, xe khách, xe con, xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe công an, xe con, xe tải, xe khách.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe công an, xe tải, xe khách, xe con.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 1
            },
            {
                "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe tải, xe con, mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con, xe tải, mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Mô tô, xe con, xe tải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe con, mô tô, xe tải.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.00.36.png?alt=media&token=95e853c5-0a74-4630-a058-6d58db317a8f",
                "category": "65e6b9383b3508005c851378",
                "topic": 1
            },
            {
                "question": "Xe nào phải nhường đường trong trường hợp này?",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.00.42.png?alt=media&token=71a346e0-9377-483f-963e-1607b018d0ed",
                "answers": [
                    {
                        "text": "Xe con.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe tải.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 1
            },
            {
                "question": "Trường hợp này xe nào được quyền đi trước?",
                "answers": [
                    {
                        "text": "Mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con.",
                        "isCorrect": true
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.00.49.png?alt=media&token=ecd0ef1e-f204-4953-89e1-17aa3a658673",
                "category": "65e6b9383b3508005c851378",
                "topic": 1
            },
            {
                "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe con (A), xe cứu thương, xe con (B).",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe cứu thương, xe con (B), xe con (A).",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con (B), xe con (A), xe cứu thương.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.05.49.png?alt=media&token=cc9a2231-42c8-488c-93fd-e793f882c142",
                "category": "65e6b9383b3508005c851378",
                "topic": 1
            },
            {
                "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe cứu thương, xe cứu hỏa, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe cứu hỏa, xe cứu thương, xe con.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe cứu thương, xe con, xe cứu hỏa.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.05.55.png?alt=media&token=e2866309-67dc-4cc7-ad06-656cb83c2451",
                "category": "65e6b9383b3508005c851378",
                "topic": 1
            },
            {
                "question": "Xe nào được quyền đi trước trong trường hợp này?",
                "answers": [
                    {
                        "text": "Mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe cứu thương.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.06.00.png?alt=media&token=dac5866f-4fa6-4512-af52-97ba2f82044b",
                "topic": 1
            },
            {
                "question": "Xe nào phải nhường đường đi cuối cùng qua nơi giao nhau này?",
                "answers": [
                    {
                        "text": "Xe khách.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con.",
                        "isCorrect": false
                    }
                ],
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.06.06.png?alt=media&token=e9b90d71-1a21-482f-a4e4-1b6d91c28c12",
                "category": "65e6b9383b3508005c851378",
                "topic": 1
            },
            {
                "question": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe con.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe tải.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 2,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.06.15.png?alt=media&token=ad45ba3e-63c8-40b6-b39f-b7ace096487f"
            },
            {
                "question": "Xe nào được quyền đi trước trong trường hợp này?",
                "answers": [
                    {
                        "text": "Xe công an.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe chữa cháy.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 2,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.06.21.png?alt=media&token=4fb20b2e-d882-475c-84e3-b25205d35f42"
            },
            {
                "question": "Theo tín hiệu đèn, xe nào được phép đi?",
                "answers": [
                    {
                        "text": "Xe con và xe khách.",
                        "isCorrect": true
                    },
                    {
                        "text": "Mô tô.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 2,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.14.00.png?alt=media&token=1996964b-f9f3-4768-8f67-845cc73b3281"
            },
            {
                "question": "Theo tín hiệu đèn, xe nào được quyền đi là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe khách, mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con, xe tải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe tải, mô tô.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 2,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.14.06.png?alt=media&token=623f1684-62ab-47a1-b3fb-86e196727eb6"
            },
            {
                "question": "Trong trường hợp này xe nào được quyền đi trước?",
                "answers": [
                    {
                        "text": "Xe công an.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe quân sự.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 2,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.14.13.png?alt=media&token=74ca6526-c72e-419e-a0b9-f7bd093dcca1"
            },
            {
                "question": "Theo tín hiệu đèn, xe tải đi theo hướng nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Hướng 2, 3, 4.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ hướng 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hướng 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 3 và 4.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 2,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.14.17.png?alt=media&token=5269b386-8cdd-4efd-87ce-be7e0edf0961"
            },
            {
                "question": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe khách, xe tải, mô tô.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe tải, xe con, mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe khách, xe con, mô tô.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 2,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.14.25.png?alt=media&token=8bda2365-1b70-4241-917f-207ffa6e9182"
            },
            {
                "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe khách, xe tải, mô tô, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con, xe khách, xe tải, mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Mô tô, xe tải, xe khách, xe con.",
                        "isCorrect": true
                    },
                    {
                        "text": "Mô tô, xe tải, xe con, xe khách.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 2,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.14.31.png?alt=media&token=ccfb00b4-18d5-4824-b3b0-4b4088e9fc75"
            },
            {
                "question": "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe tải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe con và mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ba xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con và xe tải.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 2,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.27.17.png?alt=media&token=f0085646-9670-414b-987c-df0effda8b53"
            },
            {
                "question": "Xe nào được quyền đi trước?",
                "answers": [
                    {
                        "text": "Xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con (B).",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe con (A).",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 2,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.27.22.png?alt=media&token=c90d6487-695a-4c4a-881a-381882a2c1d8"
            },
            {
                "question": "Theo hướng mũi tên, những hướng nào xe gắn máy đi được?",
                "answers": [
                    {
                        "text": "Cả ba hướng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Chỉ hướng 1 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ hướng 1.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 3,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.27.28.png?alt=media&token=a45b4fac-1301-4754-a87d-1dff80a3a8ee"
            },
            {
                "question": "Xe nào đỗ vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Cả hai xe.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không xe nào vi phạm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ xe mô tô vi phạm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ xe tải vi phạm.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 3,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.27.34.png?alt=media&token=8fab8032-2671-4c0f-9f0e-144c0d92dc53"
            },
            {
                "question": "Xe nào đỗ vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Chỉ mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ba xe.",
                        "isCorrect": true
                    },
                    {
                        "text": "Chỉ mô tô và xe tải.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 3,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.27.39.png?alt=media&token=a3f868ca-2dba-4899-a887-fcfa5f48276d"
            },
            {
                "question": "Xe tải kéo mô tô ba bánh như hình này có đúng quy tắc giao thông không?",
                "answers": [
                    {
                        "text": "Đúng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không đúng.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 3,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.27.45.png?alt=media&token=96430b26-1f4e-453b-bc51-f5d371ddcf82"
            },
            {
                "question": "Theo hướng mũi tên, hướng nào xe không được phép đi?",
                "answers": [
                    {
                        "text": "Hướng 2 và 5.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ hướng 1.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 3,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.31.59.png?alt=media&token=a6926fe9-bf27-46bf-bb66-76586bcf6138"
            },
            {
                "question": "Theo hướng mũi tên, những hướng nào ô tô không được phép đi?",
                "answers": [
                    {
                        "text": "Hướng 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hướng 1 và 4.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 2 và 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 3,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.32.04.png?alt=media&token=43395428-64bf-4430-9c7b-91e52de3a537"
            },
            {
                "question": "Xe nào vượt đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Cả 2 xe đều đúng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe khách.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 3,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.32.10.png?alt=media&token=5d29467f-1ef1-4ea6-86c6-48a583b355b7"
            },
            {
                "question": "Theo hướng mũi tên, gặp biển hướng đi phải theo đặt trước ngã tư, những hướng nào xe được phép đi?",
                "answers": [
                    {
                        "text": "Hướng 2 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hướng 1, 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 1 và 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 3,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.32.15.png?alt=media&token=c3197650-7a6b-4e4b-9692-45b0dc758bae"
            },
            {
                "question": "Xe kéo nhau như hình này có vi phạm quy tắc giao thông không?",
                "answers": [
                    {
                        "text": "Không.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vi phạm.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 3,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.32.22.png?alt=media&token=64b8872a-cbfa-40b5-bc95-3606df0d0582"
            },
            {
                "question": "Xe nào phải nhường đường trong trường hợp này?",
                "answers": [
                    {
                        "text": "Xe khách.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe tải.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 3,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.32.28.png?alt=media&token=ef4428d6-69a7-489f-a825-f644554381ba"
            },
            {
                "question": "Xe nào được quyền đi trước trong trường hợp này?",
                "answers": [
                    {
                        "text": "Xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe mô tô.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378", "topic": 4,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.36.14.png?alt=media&token=0e774a2b-0196-4453-b14c-ecdc47c30e6b"
            },
            {
                "question": "Xe kéo nhau trong trường hợp này đúng quy định không?",
                "answers": [
                    {
                        "text": "Không đúng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Đúng.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 4,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.36.20.png?alt=media&token=5cc103c9-390d-4cdc-8549-2e9399c31f36"
            },
            {
                "question": "Theo hướng mũi tên, những hướng nào ô tô con được phép đi?",
                "answers": [
                    {
                        "text": "Hướng 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 1, 3 và 4.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hướng 2, 3 và 4.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả bốn hướng.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 4,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.36.25.png?alt=media&token=e819cd48-06ef-4a3c-a624-0012c47213a4"
            },
            {
                "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe con (A), mô tô, xe con (B), xe đạp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con (B), xe đạp, mô tô, xe con (A).",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con (A), xe con (B), mô tô + xe đạp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Mô tô + xe đạp, xe con (A), xe con (B).",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 4,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.36.31.png?alt=media&token=a0de3e56-b480-4b88-843f-fb70e7c7ea0f"
            },
            {
                "question": "Theo hướng mũi tên, những hướng nào xe tải được phép đi?",
                "answers": [
                    {
                        "text": "Chỉ hướng 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hướng 1, 3 và 4.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 1, 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả bốn hướng.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 4,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.36.37.png?alt=media&token=36c333e2-21b1-4b60-812f-80def3e88247"
            },
            {
                "question": "Những hướng nào xe tải được phép đi?",
                "answers": [
                    {
                        "text": "Cả ba hướng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 2 và 3.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic": 4,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.36.42.png?alt=media&token=223510ab-bbae-4732-ab97-1c33b037e2f7"
            },
            {
                "question": "Những hướng nào ô tô tải được phép đi?",
                "answers": [
                    {
                        "text": "Chỉ hướng 1.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 1 và 4.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 1 và 5.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hướng 1, 4 và 5.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378", "topic": 4,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.40.34.png?alt=media&token=eca1e675-c845-4e37-a61d-94c2bbf48678"
            },
            {
                "question": "Những hướng nào ô tô tải được phép đi?",
                "answers": [
                    {
                        "text": "Cả bốn hướng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Trừ hướng 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hướng 2, 3 và 4.",
                        "isCorrect": false
                    },
                    {
                        "text": "Trừ hướng 4.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378", "topic": 4,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.40.40.png?alt=media&token=d2471c5c-5aae-41ef-a271-99bb7fa74925"
            },
            {
                "question": "Xe nào được quyền đi trước trong trường hợp này?",
                "answers": [
                    {
                        "text": "Mô tô.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe con.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378", "topic": 4,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.40.45.png?alt=media&token=c1ac6cd5-7e8f-424e-a573-cd02382f72ad"
            },
            {
                "question": "Ô tô con đi theo chiều mũi tên có vi phạm quy tắc giao thông không?",
                "answers": [
                    {
                        "text": "Không vi phạm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vi phạm.",
                        "isCorrect": true
                    }
                ], "topic": 4,
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.40.52.png?alt=media&token=6a22e343-0972-4f2d-a0cd-b0f4d72dbbdd"
            },
            {
                "question": "Xe nào vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe khách.",
                        "isCorrect": false
                    },
                    {
                        "text": "Mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe con và mô tô.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378","topic":5,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.40.58.png?alt=media&token=f1b5cd50-2575-4f62-bd7c-dc41ed927320"
            },
            {
                "question": "Các xe đi như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cho phép các xe ở mọi hướng được phép rẽ phải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic":5,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.41.04.png?alt=media&token=e8ab3a17-9603-4d56-975b-35a609628de7"
            },
            {
                "question": "Theo hướng mũi tên, xe nào được phép đi?",
                "answers": [
                    {
                        "text": "Mô tô, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con, xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Mô tô, xe tải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba xe.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic":5,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.45.14.png?alt=media&token=8f10f0d1-412f-44dc-9d7b-5a0ba920c836"
            },
            {
                "question": "Xe con vượt xe tải như trường hợp này có đúng không?",
                "answers": [
                    {
                        "text": "Đúng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không đúng.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic":5,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.45.22.png?alt=media&token=d8e6257a-864a-4695-82e5-c775fe4190ad"
            },
            {
                "question": "Xe nào vượt đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai xe.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic":5,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.45.28.png?alt=media&token=fdadeb36-8458-4065-8024-895119160759"
            },
            {
                "question": "Đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe chữa cháy.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe tải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả hai xe.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic":5,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.45.33.png?alt=media&token=62034434-715e-49af-9c4e-03538c369a97"
            },
            {
                "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe khách, xe tải, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con, xe tải, xe khách.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe tải, xe khách, xe con.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic":5,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.45.38.png?alt=media&token=829ec67b-7611-4563-80a3-96633c948fea"
            },
            {
                "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe khách và xe tải, xe con.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe tải, xe khách, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con, xe khách, xe tải.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic":5,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.45.44.png?alt=media&token=115aeaa3-e04d-4a50-bb31-863210615531"
            },
            {
                "question": "Những hướng nào ô tô tải được phép đi?",
                "answers": [
                    {
                        "text": "Cả bốn hướng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Chỉ hướng 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Trừ hướng 4.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic":5,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.50.21.png?alt=media&token=bc1a17ee-68ac-44c6-99a5-551a6b445306"
            },
            {
                "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng?",
                "answers": [
                    {
                        "text": "Xe công an, xe con, xe tải, xe khách.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe con, xe khách và xe công an, xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe công an, xe con, xe khách, xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con, xe tải, xe khách, xe công an.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "topic":5,
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.50.26.png?alt=media&token=7b711d7c-83b6-4cb2-8879-7cdd555b0cc6"
            },
            {
                "question": "Những hướng nào ô tô tải được phép đi?",
                "answers": [
                    {
                        "text": "Cả bốn hướng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 1, 2 và 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 1 và 4.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 1, 3 và 4.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.50.36.png?alt=media&token=da2209f7-610f-4bb6-b152-6d541fe7448c"
            },
            {
                "question": "Trong hình dưới đây, xe nào chấp hành đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Chỉ xe khách, mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tất cả các loại xe trên.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không xe nào chấp hành đúng quy tắc giao thông.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.50.42.png?alt=media&token=46deb9e0-53b8-4c34-a6af-1a8dd6df3776"
            },
            {
                "question": "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi?",
                "answers": [
                    {
                        "text": "Cả ba hướng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 1 và 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 1 và 3.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hướng 2 và 3.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.50.46.png?alt=media&token=28fbb51b-00c1-4d89-95a8-b676ef46e7c5"
            },
            {
                "question": "Trong trường hợp này, thứ tự xe đi như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe công an, xe quân sự, xe con + mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe quân sự, xe công an, xe con + mô tô.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe mô tô + xe con, xe quân sự, xe công an.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.50.52.png?alt=media&token=4a13833e-0fc1-4935-80d1-1239b529d24e"
            },
            {
                "question": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe A.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe B.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.58.27.png?alt=media&token=bb8fe4e3-3130-404e-a561-849c149817e3"
            },
            {
                "question": "Xe con quay đầu đi ngược lại như hình vẽ dưới có vi phạm quy tắc giao thông không?",
                "answers": [
                    {
                        "text": "Không vi phạm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vi phạm.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.58.33.png?alt=media&token=5572c448-4d34-4a4f-b17b-70737e2ecfa0"
            },
            {
                "question": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe con (E), mô tô (C).",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe tải (A), mô tô (D).",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe khách (B), mô tô (C).",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe khách (B), mô tô (D).",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.58.38.png?alt=media&token=43ac68d2-b30d-455e-b897-1cf30864b360"
            },
            {
                "question": "Để điều khiển cho xe đi thẳng, người lái xe phải làm gì là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Nhường xe con rẽ trái trước.",
                        "isCorrect": true
                    },
                    {
                        "text": "Đi thẳng không nhường.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.58.44.png?alt=media&token=78bcb3da-0639-4fb6-8282-6d49b391d95b"
            },
            {
                "question": "Người lái xe điều khiển xe chạy theo hướng nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Chỉ hướng 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Hướng 1 và 2.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tất cả các hướng trừ hướng 3.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tất cả các hướng trừ hướng 4.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.58.49.png?alt=media&token=daa041db-f124-4633-84cc-b76e627025dc"
            },
            {
                "question": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe con (A).",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con (B).",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2019.58.54.png?alt=media&token=757b93f6-dea5-43d5-bb61-379801a19928"
            },
            {
                "question": "Người lái xe điều khiển xe rẽ trái như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Rẽ trái ngay trước xe buýt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Rẽ trái trước xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhường đường cho xe buýt và xe tải.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.03.24.png?alt=media&token=41741b39-fa62-46c1-a20b-5d2c40170ad8"
            },
            {
                "question": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe con (B), mô tô (C).",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con (A), mô tô (C).",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con (E), mô tô (D).",
                        "isCorrect": true
                    },
                    {
                        "text": "Tất cả các loại xe trên.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.03.29.png?alt=media&token=22432c99-1421-409c-88e1-41bf0bd71ddf"
            },
            {
                "question": "Xe nào đi trước là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe của bạn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe tải.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.03.34.png?alt=media&token=b5007d1a-aec5-4622-b78f-d69a7a98b0f2"
            },
            {
                "question": "Người lái xe có thể quay đầu xe như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Quay đầu theo hướng A.",
                        "isCorrect": true
                    },
                    {
                        "text": "Quay đầu theo hướng B.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cấm quay đầu.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.03.40.png?alt=media&token=93a930aa-9493-424c-aad5-fd9f7a54fac0"
            },
            {
                "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe con và xe tải, xe của bạn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe của bạn, xe tải, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe của bạn và xe con, xe tải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe của bạn, xe tải + xe con.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.03.45.png?alt=media&token=1a0ed8c9-dc6e-4cf3-9b7f-855180330b13"
            },
            {
                "question": "Khi muốn vượt xe tải, người lái xe phải làm gì là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Tăng tốc cho xe chạy vượt qua.",
                        "isCorrect": false
                    },
                    {
                        "text": "Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.",
                        "isCorrect": true
                    },
                    {
                        "text": "Đánh lái sang làn bên trái và tăng tốc cho xe chạy vượt qua.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.03.50.png?alt=media&token=1facc88e-1888-4a62-a610-444d8f51e1a8"
            },
            {
                "question": "Theo tín hiệu đèn, xe nào phải dừng lại là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe khách, mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe tải, mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con, xe tải.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.06.45.png?alt=media&token=a5c539f6-fc1e-44b7-8373-bf8ab82db327"
            },
            {
                "question": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe khách.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe con.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.06.50.png?alt=media&token=4c95f01a-5f79-43ad-95fc-9e01b6265278"
            },
            {
                "question": "Người lái xe có được phép vượt xe tải để đi thẳng trong trường hợp này không?",
                "answers": [
                    {
                        "text": "Được vượt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cấm vượt.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.06.55.png?alt=media&token=f57711fa-3912-44b2-a653-41daf1ba9b1e"
            },
            {
                "question": "Bạn có được phép vượt xe mô tô phía trước không?",
                "answers": [
                    {
                        "text": "Cho phép.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được vượt.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.07.03.png?alt=media&token=db6f47f4-a551-451f-8a85-3e36d0e0f3ab"
            },
            {
                "question": "Người lái xe dừng tại vị trí nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Vị trí A và B.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vị trí A và C.",
                        "isCorrect": false
                    },
                    {
                        "text": "Vị trí B và C.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cả ba vị trí A, B, C.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.07.09.png?alt=media&token=84480bd1-920a-44f4-b687-bb2a04347558"
            },
            {
                "question": "Bạn được dừng xe ở vị trí nào trong tình huống này?",
                "answers": [
                    {
                        "text": "Được phép dừng ở vị trí A.",
                        "isCorrect": false
                    },
                    {
                        "text": "Được phép dừng ở vị trí B.",
                        "isCorrect": false
                    },
                    {
                        "text": "Được phép dừng ở vị trí A và B.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được dừng.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.07.14.png?alt=media&token=93f2891c-e723-48e1-a854-efe6bce4df39"
            },
            {
                "question": "Theo tín hiệu đèn của xe cơ giới, xe nào vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe ô tô con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không xe nào vi phạm.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai xe.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.11.39.png?alt=media&token=6cd9a6b9-fc28-4600-8a34-07cdb76ca7de"
            },
            {
                "question": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe tải, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe khách, xe con.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe khách, xe tải.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.11.44.png?alt=media&token=01ed4d6e-3b1d-49e7-bef8-86f36b03fa24"
            },
            {
                "question": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe tải, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe khách, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe khách, xe tải.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.11.49.png?alt=media&token=8a194896-5433-46cf-bd4c-5ad6ae5f1b5c"
            },
            {
                "question": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe con, xe tải, xe khách.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe tải, xe khách, xe mô tô.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe khách, xe mô tô, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả bốn xe.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.11.57.png?alt=media&token=cb6298a2-581b-4839-91f5-6c3cf525b1b6"
            },
            {
                "question": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe khách, xe tải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe khách, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con, xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe khách, xe tải, xe con.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.12.03.png?alt=media&token=4884aae1-5e3c-44bb-9a1a-f67eca7b0ed2"
            },
            {
                "question": "Trong tình huống dưới đây, để tránh xe phía trước bị hỏng đột xuất trên đường, người lái xe phải làm gì?",
                "answers": [
                    {
                        "text": "Đánh lái sang trái cho xe vượt qua.",
                        "isCorrect": false
                    },
                    {
                        "text": "Quan sát phía trước, phía sau, khi đủ điều kiện an toàn, bật tín hiệu bằng đèn hoặc còi rồi cho xe chạy vượt qua.",
                        "isCorrect": true
                    },
                    {
                        "text": "Cấm vượt.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.12.09.png?alt=media&token=b6989c25-b1e5-4d5e-b6c9-49021fae1639"
            },
            {
                "question": "Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe tải, mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe khách, mô tô.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe tải, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Mô tô, xe con.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.18.04.png?alt=media&token=e8057291-35ac-41c0-b628-cd95eab1c636"
            },
            {
                "question": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe con (A), xe con (B), xe tải (D).",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe tải (D), xe con (E), xe buýt (G).",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe tải (D), xe con (B).",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe con (B), xe con (C).",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.18.10.png?alt=media&token=017667fb-4ceb-4381-8303-91216396410c"
            },
            {
                "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
                "answers": [
                    {
                        "text": "Xe của bạn, mô tô, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con, xe của bạn, mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Mô tô, xe con, xe của bạn.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.18.14.png?alt=media&token=025b69a8-9acf-4d02-94c3-168800a4fad8"
            },
            {
                "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
                "answers": [
                    {
                        "text": "Xe của bạn, mô tô, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con, xe của bạn, mô tô.",
                        "isCorrect": true
                    },
                    {
                        "text": "Mô tô, xe con, xe của bạn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.18.20.png?alt=media&token=c3d30a47-76ed-4a7f-9468-fbe98eee30b7"
            },
            {
                "question": "Xe nào phải dừng lại trong trường hợp này?",
                "answers": [
                    {
                        "text": "Xe con.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe của bạn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả hai xe.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.18.25.png?alt=media&token=b93ca6c0-2f08-4b39-962a-5e21139838da"
            },
            {
                "question": "Xe của bạn được đi theo hướng nào trong trường hợp này?",
                "answers": [
                    {
                        "text": "Đi thẳng, rẽ trái.",
                        "isCorrect": true
                    },
                    {
                        "text": "Đi thẳng, rẽ phải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Rẽ trái.",
                        "isCorrect": false
                    },
                    {
                        "text": "Đi thẳng, rẽ phải, rẽ trái.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.18.32.png?alt=media&token=767f476c-d45d-439f-b73b-2a9923aa2ac3"
            },
            {
                "question": "Xe của bạn được đi theo hướng nào trong trường hợp này?",
                "answers": [
                    {
                        "text": "Chuyển sang làn đường bên phải và rẽ phải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dừng lại trước vạch dừng và rẽ phải khi đèn xanh.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dừng lại trước vạch dừng và đi thẳng hoặc rẽ trái khi đèn xanh.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.21.23.png?alt=media&token=8a42c24e-bd60-4cc8-bb4d-c472a45f8b63"
            },
            {
                "question": "Bạn xử lý như thế nào trong trường hợp này?",
                "answers": [
                    {
                        "text": "Tăng tốc độ, rẽ phải trước xe tải và xe đạp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ, rẽ phải sau xe tải và xe đạp.",
                        "isCorrect": true
                    },
                    {
                        "text": "Tăng tốc độ, rẽ phải trước xe đạp.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.21.28.png?alt=media&token=906725ce-e114-42ee-93c6-b74a78b7963d"
            },
            {
                "question": "Bạn xử lý như thế nào trong trường hợp này?",
                "answers": [
                    {
                        "text": "Tăng tốc độ, rẽ phải trước xe con màu xanh phía trước và người đi bộ.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ, để người đi bộ qua đường và rẽ phải trước xe con màu xanh.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ, để người đi bộ qua đường và rẽ phải sau xe con màu xanh.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.21.33.png?alt=media&token=f7d3019b-f231-48be-b4e4-065d520f2ad8"
            },
            {
                "question": "Bạn xử lý như thế nào trong trường hợp này?",
                "answers": [
                    {
                        "text": "Nhường đường cho xe khách và đi trước xe đạp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhường đường cho xe đạp và đi trước xe khách.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nhường đường cho xe đạp và xe khách.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.21.38.png?alt=media&token=204b192b-19d4-4929-a2b7-7ebce78d2212"
            },
            {
                "question": "Xe nào phải nhường đường trong trường hợp này?",
                "answers": [
                    {
                        "text": "Xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe tải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe của bạn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.21.43.png?alt=media&token=8e14e8b4-3480-47a2-aaee-4f60a673f476"
            },
            {
                "question": "Xe nào phải nhường đường trong trường hợp này?",
                "answers": [
                    {
                        "text": "Xe đi ngược chiều.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe của bạn.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.21.49.png?alt=media&token=4b7964a4-a1b9-4efb-b040-35b669c48efe"
            },
            {
                "question": "Bạn xử lý như thế nào khi lái xe ô tô vượt qua đoàn người đi xe đạp có tổ chức?",
                "answers": [
                    {
                        "text": "Tăng tốc độ, chuyển sang làn đường bên trái để vượt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được vượt những người đi xe đạp.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.25.29.png?alt=media&token=a113ea82-c4dc-46fc-bd1c-234d3d6b06e3"
            },
            {
                "question": "Bạn xử lý như thế nào trong trường hợp này?",
                "answers": [
                    {
                        "text": "Nếu phía sau không có xe xin vượt, chuyển sang làn đường bên trái.",
                        "isCorrect": false
                    },
                    {
                        "text": "Nếu phía sau có xe xin vượt, thì giảm tốc độ, ở lại làn đường, dừng lại khi cần thiết.",
                        "isCorrect": false
                    },
                    {
                        "text": "Tăng tốc độ trên làn đường của mình và vượt xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả ý 1 và ý 2.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.25.48.png?alt=media&token=0b2fe885-6148-4481-a8c0-3306637e1469"
            },
            {
                "question": "Bạn xử lý như thế nào khi xe phía trước đang lùi ra khỏi nơi đỗ?",
                "answers": [
                    {
                        "text": "Chuyển sang nửa đường bên trái để đi tiếp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Bấm còi, nháy đèn báo hiệu và đi tiếp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ, dừng lại nhường đường.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.25.54.png?alt=media&token=a979fa2b-03a5-4240-a813-5bf877ba353e"
            },
            {
                "question": "Bạn xử lý như thế nào trong trường hợp này?",
                "answers": [
                    {
                        "text": "Phanh xe giảm tốc độ và đi sát lề đường bên phải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Bấm còi, nháy đèn báo hiệu, giữ nguyên tốc độ và đi tiếp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phanh xe giảm tốc độ và đi sát vào lề đường bên trái.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.26.29.png?alt=media&token=020608b1-2069-4acc-b9e9-0cc162178848"
            },
            {
                "question": "Bạn xử lý như thế nào trong trường hợp này?",
                "answers": [
                    {
                        "text": "Bật tín hiệu xin chuyển làn đường sang trái để vượt xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Phanh xe giảm tốc độ chờ xe tải phía trước chuyển làn đường.",
                        "isCorrect": true
                    },
                    {
                        "text": "Bấm còi báo hiệu và vượt qua xe tải trên làn đường của mình.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.26.34.png?alt=media&token=2c1a3b4b-4316-4b81-89b0-dc78fc9a7d91"
            },
            {
                "question": "Bạn xử lý như thế nào trong trường hợp này?",
                "answers": [
                    {
                        "text": "Tăng tốc độ và đi thẳng qua ngã tư.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dừng xe trước vạch dừng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ và đi thẳng qua ngã tư.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.26.41.png?alt=media&token=377e7de1-9edb-4654-a041-88742887b726"
            },
            {
                "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
                "answers": [
                    {
                        "text": "Xe của bạn, mô tô, xe đạp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe mô tô, xe đạp, xe của bạn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe đạp, xe mô tô, xe của bạn.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.30.03.png?alt=media&token=2aaeef11-cfcc-458a-b922-f3e4cf2858d6"
            },
            {
                "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
                "answers": [
                    {
                        "text": "Xe của bạn, xe tải, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe con, xe tải, xe của bạn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe tải, xe của bạn, xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe của bạn, xe con, xe tải.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.30.08.png?alt=media&token=718dd1d7-fb48-45f8-a111-df579432f8bd"
            },
            {
                "question": "Xe nào phải nhường đường trong trường hợp này?",
                "answers": [
                    {
                        "text": "Xe của bạn.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe con.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.30.14.png?alt=media&token=e1130208-949f-4ce9-ae2e-d5cb08a873b5"
            },
            {
                "question": "Xe nào phải nhường đường trong trường hợp này?",
                "answers": [
                    {
                        "text": "Xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe của bạn.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.30.19.png?alt=media&token=2a9c7b46-02d4-40ab-8dab-758e9e72dee7"
            },
            {
                "question": "Bạn xử lý như thế nào trong trường hợp này?",
                "answers": [
                    {
                        "text": "Tăng tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ, để người đi bộ sang đường trước, sau đó cho xe đi qua vạch người đi bộ sang đường.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.30.24.png?alt=media&token=55591ae3-d4dd-4915-ae19-378b41a7995f"
            },
            {
                "question": "Xe nào được đi trước trong trường hợp này?",
                "answers": [
                    {
                        "text": "Xe con.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe của bạn.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.30.30.png?alt=media&token=9195f619-d929-45b4-9057-f2d197570b06"
            },
            {
                "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
                "answers": [
                    {
                        "text": "Xe con, xe tải, xe của bạn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe tải, xe con, xe của bạn.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe tải, xe của bạn, xe con.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.33.07.png?alt=media&token=7435c48c-5385-496b-aefe-e78eee8f45ff"
            },
            {
                "question": "Bạn xử lý như thế nào trong trường hợp này?",
                "answers": [
                    {
                        "text": "Tăng tốc độ cho xe lấn sang phần đường bên trái.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ cho xe lấn sang phần đường bên trái.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ cho xe đi sát phần đường bên phải.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.33.12.png?alt=media&token=0d8213b0-abe4-4bde-b9b2-c9ff31fad7a6"
            },
            {
                "question": "Xe nào được đi trước trong trường hợp này?",
                "answers": [
                    {
                        "text": "Xe tải.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe của bạn.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.33.17.png?alt=media&token=2ce94067-dd8c-47cf-915f-267bdd9efb1b"
            },
            {
                "question": "Xe nào dừng đúng theo quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Xe con.",
                        "isCorrect": true
                    },
                    {
                        "text": "Xe mô tô.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả 2 xe đều đúng.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.33.22.png?alt=media&token=0d1f4bd4-0086-4b57-ace9-26297dc83dc2"
            },
            {
                "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
                "answers": [
                    {
                        "text": "Xe tải, xe đạp, xe của bạn.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe của bạn, xe đạp, xe tải.",
                        "isCorrect": false
                    },
                    {
                        "text": "Xe của bạn, xe tải, xe đạp.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.33.27.png?alt=media&token=4979f9c8-0bd3-4916-b4bc-58be00730be5"
            },
            {
                "question": "Để điều khiển xe rẽ trái, bạn chọn hướng đi nào dưới đây?",
                "answers": [
                    {
                        "text": "Hướng 1.",
                        "isCorrect": true
                    },
                    {
                        "text": "Hướng 2.",
                        "isCorrect": false
                    },
                    {
                        "text": "Cả 2 hướng đều được.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.33.32.png?alt=media&token=c4bcb4c8-e6ae-4177-8c7e-cc478079f216"
            },
            {
                "question": "Khi gặp xe ngược chiều bật đèn pha trong tình huống dưới đây, bạn xử lý như thế nào?",
                "answers": [
                    {
                        "text": "Bật đèn chiếu xa, tăng tốc độ vượt xe cùng chiều.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giữ nguyên đèn chiếu gần, giảm tốc độ, đi sau xe phía trước.",
                        "isCorrect": true
                    },
                    {
                        "text": "Giữ nguyên đèn chiếu gần, tăng tốc độ vượt xe cùng chiều.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.36.41.png?alt=media&token=b696210d-86c7-468d-a5f1-80d6bd036477"
            },
            {
                "question": "Xe của bạn đang di chuyển gần đến khu vực giao cắt với đường sắt, khi rào chắn đang dịch chuyển, bạn điều khiển xe như thế nào là đúng quy tắc giao thông?",
                "answers": [
                    {
                        "text": "Quan sát nếu thấy không có tàu thì tăng tốc cho xe vượt qua đường sắt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Dừng lại trước rào chắn một khoảng cách an toàn.",
                        "isCorrect": true
                    },
                    {
                        "text": "Ra tín hiệu, yêu cầu người gác chắn tàu kéo chậm Barie để xe bạn qua.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.36.47.png?alt=media&token=44970618-14ea-4e6c-9d46-c2aca83be3c3"
            },
            {
                "question": "Trong tình huống dưới đây, xe con màu đỏ nhập làn đường cao tốc theo hướng mũi tên là đúng hay sai?",
                "answers": [
                    {
                        "text": "Đúng.",
                        "isCorrect": false
                    },
                    {
                        "text": "Sai.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.36.52.png?alt=media&token=84f33fe9-2d63-4815-8ba6-298e16895d2f"
            },
            {
                "question": "Trong tình huống dưới đây, xe con màu đỏ có được phép vượt khi xe con màu xanh đang vượt xe tải hay không?",
                "answers": [
                    {
                        "text": "Được vượt.",
                        "isCorrect": false
                    },
                    {
                        "text": "Không được vượt.",
                        "isCorrect": true
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.36.57.png?alt=media&token=26e2fbff-c435-4f0c-840d-e91f9bdc18ef"
            },
            {
                "question": "Trong tình huống dưới đây, xe con màu vàng vượt xe con màu đỏ là đúng quy tắc giao thông hay không?",
                "answers": [
                    {
                        "text": "Đúng.",
                        "isCorrect": true
                    },
                    {
                        "text": "Không đúng.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.37.03.png?alt=media&token=9f752977-e91f-4f99-8782-dd020f394b1e"
            },
            {
                "question": "Trong tình huống dưới đây, xe đầu kéo kéo rơ moóc (xe container) đang rẽ phải, xe con màu xanh và xe máy phía sau xe container đi như thế nào để đảm bảo an toàn?",
                "answers": [
                    {
                        "text": "Vượt về phía bên phải để đi tiếp.",
                        "isCorrect": false
                    },
                    {
                        "text": "Giảm tốc độ chờ xe container rẽ xong rồi tiếp tục đi.",
                        "isCorrect": true
                    },
                    {
                        "text": "Vượt về phía bên trái để đi tiếp.",
                        "isCorrect": false
                    }
                ],
                "category": "65e6b9383b3508005c851378",
                "img": "https://firebasestorage.googleapis.com/v0/b/mobile-7a7e6.appspot.com/o/Screenshot%202024-03-07%20at%2020.37.09.png?alt=media&token=f363836b-8f61-413b-b816-b67fa0140250"
            }
        ]
        const addedQuestions = await Promise.all(requestData.map(async (questionData) => {
            const newQuestion = new Question(questionData);
            return await newQuestion.save();
        }));

        res.status(200).json({ message: 'Data successfully added', data: addedQuestions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});





questionRouter.get('/', async (req, res) => {
    try {
        const questions = await Question.find().populate('category').exec();
        res.status(200).json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});





export default questionRouter;