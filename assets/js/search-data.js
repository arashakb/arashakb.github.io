// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "* Equal Contribution",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-started-my-direct-phd-in-computer-engineering-at-northeastern-university-with-prof-yanzhi-wang",
          title: '🎓 Started my direct PhD in Computer Engineering at Northeastern University with Prof....',
          description: "",
          section: "News",},{id: "news-our-paper-moxin-llm-was-accepted-to-sci-fm-iclr-25",
          title: '📄 Our paper Moxin-LLM was accepted to SCI-FM @ ICLR’25.',
          description: "",
          section: "News",},{id: "news-our-paper-beyond-overall-accuracy-pose-and-occlusion-driven-fairness-analysis-in-pedestrian-detection-for-autonomous-driving-was-accepted-at-ieee-itsc-2025",
          title: '📄 Our paper Beyond Overall Accuracy: Pose- and Occlusion-driven Fairness Analysis in Pedestrian...',
          description: "",
          section: "News",},{id: "news-earned-my-m-s-in-computer-engineering-from-northeastern-university-with-a-concentration-in-computer-vision-machine-learning-and-algorithms-cvla-along-the-way-to-my-ph-d",
          title: '🎓 Earned my M.S. in Computer Engineering from Northeastern University, with a concentration...',
          description: "",
          section: "News",},{id: "news-our-paper-cross-platform-scaling-of-vision-language-action-models-from-edge-to-cloud-gpus-was-accepted-at-glsvlsi-2026",
          title: '📄 Our paper Cross-Platform Scaling of Vision-Language-Action Models from Edge to Cloud GPUs...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
