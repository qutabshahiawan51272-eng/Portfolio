import puppeteer from 'puppeteer';

const html = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Helvetica', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 40px; }
  h1 { font-size: 28px; margin-bottom: 5px; color: #000; }
  h2 { font-size: 20px; color: #444; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px; }
  h3 { font-size: 16px; margin-bottom: 2px; color: #000; }
  p { margin: 5px 0; font-size: 14px; }
  .contact { font-size: 14px; color: #666; margin-bottom: 25px; }
  ul { margin-top: 5px; margin-bottom: 15px; padding-left: 20px; }
  li { font-size: 14px; margin-bottom: 5px; }
  .date { float: right; font-style: italic; font-size: 14px; font-weight: normal; color: #666; }
</style>
</head>
<body>
  <h1>Umar Fayyaz</h1>
  <div class="contact">
    Web Developer | Business Development Associate | Marketing Specialist<br>
    Email: umarfayyaz98466@gmail.com | Phone: +92 310 5298166 | LinkedIn: linkedin.com/in/umarfayyaz-
  </div>

  <h2>Professional Profile</h2>
  <p>A dedicated and results-driven Computer Science graduate with hands-on experience in web development, business development, and digital engagement. Highly adaptable to diverse organizational environments and capable of contributing effectively across both technical and business functions.</p>

  <h2>Experience</h2>
  
  <h3>Business Development Intern <span class="date">May 2026 – Present</span></h3>
  <p><strong>Safa Tech Solutions (Remote)</strong></p>
  <ul>
    <li>Conduct client outreach and lead generation to support business growth for a technology services firm.</li>
    <li>Coordinate and conduct professional meetings with prospective and existing clients.</li>
    <li>Carry out market research to identify new international business development opportunities.</li>
  </ul>

  <h3>Teaching Assistant & Academic Grader <span class="date">Sep 2022 – May 2026</span></h3>
  <p><strong>Barani Institute of Information Technology (BIIT)</strong></p>
  <ul>
    <li>Awarded merit scholarship and selected by university professors to support course delivery over four consecutive academic years.</li>
    <li>Graded quizzes, assignments, and class participation for junior semester students each term.</li>
  </ul>

  <h3>Records & Documentation Coordinator <span class="date">Aug 2024 – Oct 2024</span></h3>
  <p><strong>Fox Leads Inc. (On-site)</strong></p>
  <ul>
    <li>Maintained and updated organizational records with precision, ensuring accuracy and completeness of data.</li>
  </ul>

  <h3>Computer Science & Academic Instructor <span class="date">May 2021 – Present</span></h3>
  <p><strong>Sir Syed Academy & Bright Future Academy</strong></p>
  <ul>
    <li>Delivered Computer Science curriculum to Grade 9, Grade 10, First Year, and Second Year students.</li>
  </ul>

  <h3>Web Development Intern <span class="date">2021 (3 Months)</span></h3>
  <p><strong>NovaSpire Solutions (On-site)</strong></p>
  <ul>
    <li>Assisted in the development and maintenance of web-based projects using HTML, CSS, and JavaScript.</li>
  </ul>

  <h2>Education</h2>
  <p><strong>Bachelor of Science in Computer Science</strong><br>PMAS-Arid Agriculture University Rawalpindi (BIIT)</p>

  <h2>Skills & Certifications</h2>
  <ul>
    <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React.js, ASP.NET, WordPress</li>
    <li><strong>Programming:</strong> C#, Java, C++, SQL</li>
    <li><strong>Certifications:</strong> WordPress Basics Certification (2025), ServiceNow Fundamentals Certification (2024)</li>
  </ul>
</body>
</html>
`;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.pdf({ path: 'public/Umar_Fayyaz_CV.pdf', format: 'A4', printBackground: true, margin: { top: '20px', bottom: '20px' } });
  await browser.close();
})();
