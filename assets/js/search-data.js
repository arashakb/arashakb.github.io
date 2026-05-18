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
  },{id: "nav-experience",
          title: "Experience",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "* Equal Contribution, † Corresponding Author(s)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-started-my-phd-at-northeastern-university-with-prof-yanzhi-wang",
          title: 'Started my PhD at Northeastern University with Prof. Yanzhi Wang.',
          description: "",
          section: "News",},{id: "news-our-paper-moxin-llm-was-accepted-to-sci-fm-iclr-25",
          title: 'Our paper Moxin-LLM was accepted to SCI-FM @ ICLR’25.',
          description: "",
          section: "News",},{id: "news-released-the-preprint-of-vote-vision-language-action-optimization-with-trajectory-ensemble-voting-on-arxiv",
          title: 'Released the preprint of VOTE: Vision-Language-Action Optimization with Trajectory Ensemble Voting on arXiv....',
          description: "",
          section: "News",},{id: "news-our-paper-beyond-overall-accuracy-pose-and-occlusion-driven-fairness-analysis-in-pedestrian-detection-for-autonomous-driving-was-accepted-at-ieee-itsc-2025",
          title: 'Our paper Beyond Overall Accuracy: Pose- and Occlusion-driven Fairness Analysis in Pedestrian Detection...',
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
