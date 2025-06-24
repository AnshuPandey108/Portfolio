import { Briefcase, Code, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Software Engineer</h3>

            <p className="text-muted-foreground">
               I'm a software engineer with 1 year of hands-on experience building scalable, secure, and production-ready systems. I specialize in Node.js, Express.js, MySql, and Angular, and have worked on real-time applications, REST APIs, using AWS.
            </p>

            <p className="text-muted-foreground">
              I have experience working with REST APIs, and AWS services such as EC2 and S3
              I'm passionate about solving real-world  problems and optimizing performance for scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get In Touch</a>

              <a
                href="/Anshu_Resume2025.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">API Development</h4>
                  <p className="text-muted-foreground">
                    Designing robust REST  APIs with authentication and role-based access.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Aws </h4>
                  <p className="text-muted-foreground">
                     full-stack apps with GitHub Actions & deployed via AWS (EC2, cloudfront,loadbalancer, S3).
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Experience</h4>
                  <p className="text-muted-foreground">
                   Implement the API integration in both JavaScript and Angular, and develop the corresponding components in each.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
