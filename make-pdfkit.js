import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/Umar_Fayyaz_CV.pdf'));

doc.fontSize(24).text('Umar Fayyaz', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(12).fillColor('gray').text('Web Developer | Business Development Associate | Marketing Specialist', { align: 'center' });
doc.text('umarfayyaz98466@gmail.com | +92 310 5298166 | linkedin.com/in/umarfayyaz-', { align: 'center' });
doc.moveDown(1.5);

doc.fillColor('black').fontSize(16).text('Professional Profile', { underline: true });
doc.moveDown(0.5);
doc.fontSize(11).text('A dedicated and results-driven Computer Science graduate with hands-on experience in web development, business development, and digital engagement. Highly adaptable to diverse organizational environments and capable of contributing effectively across both technical and business functions.');
doc.moveDown(1.5);

doc.fontSize(16).text('Experience', { underline: true });
doc.moveDown(0.5);
doc.fontSize(12).text('Business Development Intern | Safa Tech Solutions (May 2026 - Present)');
doc.fontSize(10).text('- Conduct client outreach and lead generation');
doc.text('- Coordinate and conduct professional meetings with clients');
doc.text('- Carry out market research to identify new opportunities');
doc.moveDown();

doc.fontSize(12).text('Teaching Assistant & Academic Grader | BIIT (Sep 2022 - May 2026)');
doc.fontSize(10).text('- Awarded merit scholarship to support course delivery');
doc.text('- Graded quizzes, assignments, and class participation');
doc.moveDown();

doc.fontSize(12).text('Records & Documentation Coordinator | Fox Leads Inc. (Aug 2024 - Oct 2024)');
doc.fontSize(10).text('- Maintained and updated organizational records with precision');
doc.moveDown();

doc.fontSize(12).text('Web Development Intern | NovaSpire Solutions (2021)');
doc.fontSize(10).text('- Assisted in development of web projects using HTML, CSS, JavaScript');
doc.moveDown(1.5);

doc.fontSize(16).text('Education', { underline: true });
doc.moveDown(0.5);
doc.fontSize(12).text('Bachelor of Science in Computer Science');
doc.fontSize(10).text('PMAS-Arid Agriculture University Rawalpindi (BIIT)');
doc.moveDown(1.5);

doc.fontSize(16).text('Skills', { underline: true });
doc.moveDown(0.5);
doc.fontSize(10).text('Web Development: HTML, CSS, JavaScript, React.js, ASP.NET, WordPress');
doc.text('Programming Languages: C#, Java, C++, SQL');
doc.text('Certifications: WordPress Basics (2025), ServiceNow Fundamentals (2024)');

doc.end();
