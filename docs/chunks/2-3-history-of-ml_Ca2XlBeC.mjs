import { k as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_5nTOXfPx.mjs';
import 'clsx';

const frontmatter = {
  "title": "2.3 A Brief History of Machine Learning",
  "description": "From 1950s to Now",
  "category": "machine-learning",
  "level": "beginner",
  "order": 3,
  "tags": ["ml", "history", "timeline"],
  "pubDate": "2025-12-03T00:00:00.000Z"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "-23-a-brief-history-of-machine-learning-from-1950s-to-now",
    "text": "📜 2.3 A Brief History of Machine Learning (From 1950s to Now)"
  }, {
    "depth": 2,
    "slug": "1950s--the-birth-of-ai-and-ml-ideas",
    "text": "1950s — The Birth of AI and ML Ideas"
  }, {
    "depth": 2,
    "slug": "1960s--early-machine-learning-algorithms",
    "text": "1960s — Early Machine Learning Algorithms"
  }, {
    "depth": 2,
    "slug": "1980s--rise-of-decision-trees--optimization",
    "text": "1980s — Rise of Decision Trees & Optimization"
  }, {
    "depth": 2,
    "slug": "1990s--data-boom-better-models",
    "text": "1990s — Data Boom, Better Models"
  }, {
    "depth": 2,
    "slug": "2012--deep-learning-revolution",
    "text": "2012 — Deep Learning Revolution"
  }, {
    "depth": 2,
    "slug": "2017present--transformers--modern-ai",
    "text": "2017–Present — Transformers & Modern AI"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h1: "h1",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {MCQ} = _components;
  if (!MCQ) _missingMdxReference("MCQ");
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "-23-a-brief-history-of-machine-learning-from-1950s-to-now",
      children: "📜 2.3 A Brief History of Machine Learning (From 1950s to Now)"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/learn/machine-learning/module-2/image-3.png",
        alt: "Timeline of Machine Learning history, highlighting key events from the Perceptron to the Deep Learning revolution"
      })
    }), "\n", createVNode(_components.p, {
      children: "Machine Learning evolved over decades. Here’s the story in simple language:"
    }), "\n", createVNode(_components.h2, {
      id: "1950s--the-birth-of-ai-and-ml-ideas",
      children: "1950s — The Birth of AI and ML Ideas"
    }), "\n", createVNode(_components.p, {
      children: "Alan Turing asks the fundamental question:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "“Can machines think?”"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Foundational ideas of learning systems emerge."
    }), "\n", createVNode(_components.h2, {
      id: "1960s--early-machine-learning-algorithms",
      children: "1960s — Early Machine Learning Algorithms"
    }), "\n", createVNode(_components.p, {
      children: "The first ML algorithms appear:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Nearest Neighbor"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "https://en.wikipedia.org/wiki/Perceptron",
            rel: "noopener noreferrer",
            target: "_blank",
            children: "Perceptron"
          })
        }), " (first neural network idea)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Computers were too slow to train large models."
    }), "\n", createVNode(_components.h2, {
      id: "1980s--rise-of-decision-trees--optimization",
      children: "1980s — Rise of Decision Trees & Optimization"
    }), "\n", createVNode(_components.p, {
      children: "Algorithms like:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "ID3"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Decision Trees"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Backpropagation"
        }), " (key for ", createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "/learn/ai-basics/module-1/1-7-neural-networks",
            children: "neural networks"
          })
        }), ")"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "These change the field forever."
    }), "\n", createVNode(_components.h2, {
      id: "1990s--data-boom-better-models",
      children: "1990s — Data Boom, Better Models"
    }), "\n", createVNode(_components.p, {
      children: "As data grew, ML became practical. Developments included:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Support Vector Machines (SVM)"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Ensemble methods"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "2012--deep-learning-revolution",
      children: "2012 — Deep Learning Revolution"
    }), "\n", createVNode(_components.p, {
      children: ["A neural network (", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://en.wikipedia.org/wiki/AlexNet",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "AlexNet"
        })
      }), ") beats traditional ML at image recognition. This is the turning point."]
    }), "\n", createVNode(_components.h2, {
      id: "2017present--transformers--modern-ai",
      children: "2017–Present — Transformers & Modern AI"
    }), "\n", createVNode(_components.p, {
      children: ["Google introduces the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://arxiv.org/abs/1706.03762",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "Transformer"
        })
      }), " architecture, leading to:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "GPT models"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "ChatGPT"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Claude"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Gemini"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "LLaMA"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Transformers redefine ML and NLP forever."
    }), "\n", createVNode(MCQ, {
      question: "Which event in 2012 is considered the 'Deep Learning Revolution' turning point?",
      options: ["AlexNet winning the ImageNet competition", "The release of ChatGPT", "Alan Turing's paper", "The invention of the Perceptron"],
      correct: "AlexNet winning the ImageNet competition",
      explanation: "AlexNet's victory in the 2012 ImageNet competition demonstrated the superior power of Deep Neural Networks for image recognition, sparking the Deep Learning revolution."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/learn/machine-learning/module-2/2-3-history-of-ml.mdx";
const file = "C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-3-history-of-ml.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-3-history-of-ml.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
