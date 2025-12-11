import { k as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CA1TwRfu.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BivyFJ7Q.mjs';
import { $ as $$YouTubeEmbed } from './YouTubeEmbed_4H6jTnRn.mjs';
import 'clsx';

const frontmatter = {
  "title": "2.6 Types of Machine Learning",
  "description": "Complete Detailed Section",
  "category": "machine-learning",
  "level": "beginner",
  "order": 6,
  "tags": ["ml", "types", "supervised", "unsupervised", "reinforcement"],
  "pubDate": "2025-12-03T00:00:00.000Z"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "-type-1--supervised-learning-most-important-in-ml",
    "text": "⭐ Type 1 — Supervised Learning (Most Important in ML)"
  }, {
    "depth": 3,
    "slug": "used-for",
    "text": "Used for:"
  }, {
    "depth": 3,
    "slug": "why-its-powerful",
    "text": "Why it’s powerful:"
  }, {
    "depth": 2,
    "slug": "-type-2--unsupervised-learning",
    "text": "⭐ Type 2 — Unsupervised Learning"
  }, {
    "depth": 3,
    "slug": "examples",
    "text": "Examples:"
  }, {
    "depth": 3,
    "slug": "algorithms",
    "text": "Algorithms:"
  }, {
    "depth": 2,
    "slug": "-type-3--semi-supervised-learning",
    "text": "⭐ Type 3 — Semi-Supervised Learning"
  }, {
    "depth": 2,
    "slug": "-type-4--reinforcement-learning-learning-by-reward",
    "text": "⭐ Type 4 — Reinforcement Learning (Learning by Reward)"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  }, {MCQ} = _components;
  if (!MCQ) _missingMdxReference("MCQ");
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/learn/machine-learning/module-2/image-6.png",
        alt: "Diagram showing the four main types of Machine Learning: Supervised, Unsupervised, Semi-Supervised, and Reinforcement Learning"
      })
    }), "\n", createVNode($$YouTubeEmbed, {
      id: "Gv9_4yMHFhI",
      title: "Machine Learning Fundamentals by StatQuest"
    }), "\n", createVNode(_components.p, {
      children: "ML has four major types. Each type solves different problems."
    }), "\n", createVNode(_components.h2, {
      id: "-type-1--supervised-learning-most-important-in-ml",
      children: "⭐ Type 1 — Supervised Learning (Most Important in ML)"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://en.wikipedia.org/wiki/Supervised_learning",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "Supervised learning"
        })
      }), " uses ", createVNode(_components.strong, {
        children: "labeled data"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Example:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Image"
          }), createVNode(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Label"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Cat photo"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Cat"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Dog photo"
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Dog"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "used-for",
      children: "Used for:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Email spam detection"
      }), "\n", createVNode(_components.li, {
        children: "Disease prediction"
      }), "\n", createVNode(_components.li, {
        children: "Face recognition"
      }), "\n", createVNode(_components.li, {
        children: "Credit card fraud detection"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "why-its-powerful",
      children: "Why it’s powerful:"
    }), "\n", createVNode(_components.p, {
      children: ["It learns the relationship between ", createVNode(_components.code, {
        children: "input → output"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "-type-2--unsupervised-learning",
      children: "⭐ Type 2 — Unsupervised Learning"
    }), "\n", createVNode(_components.p, {
      children: ["Learns from ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://en.wikipedia.org/wiki/Unsupervised_learning",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "unlabeled data"
        })
      }), ". Finds hidden patterns."]
    }), "\n", createVNode(_components.h3, {
      id: "examples",
      children: "Examples:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Customer segmentation"
      }), "\n", createVNode(_components.li, {
        children: "Product grouping"
      }), "\n", createVNode(_components.li, {
        children: "Document clustering"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "algorithms",
      children: "Algorithms:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "K-Means"
      }), "\n", createVNode(_components.li, {
        children: "Hierarchical Clustering"
      }), "\n", createVNode(_components.li, {
        children: "PCA"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "-type-3--semi-supervised-learning",
      children: "⭐ Type 3 — Semi-Supervised Learning"
    }), "\n", createVNode(_components.p, {
      children: "Mix of:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Few labeled samples"
      }), "\n", createVNode(_components.li, {
        children: "Many unlabeled samples"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Used in:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "YouTube video tagging"
      }), "\n", createVNode(_components.li, {
        children: "Facial recognition"
      }), "\n", createVNode(_components.li, {
        children: "Speech labeling"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "-type-4--reinforcement-learning-learning-by-reward",
      children: "⭐ Type 4 — Reinforcement Learning (Learning by Reward)"
    }), "\n", createVNode(_components.p, {
      children: ["Agent takes actions → gets ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://en.wikipedia.org/wiki/Reinforcement_learning",
          rel: "noopener noreferrer",
          target: "_blank",
          children: "reward"
        })
      }), " → learns."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Used in:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Self-driving cars"
      }), "\n", createVNode(_components.li, {
        children: "Robotics"
      }), "\n", createVNode(_components.li, {
        children: "Game AI"
      }), "\n", createVNode(_components.li, {
        children: "Navigation"
      }), "\n"]
    }), "\n", createVNode(MCQ, {
      question: "Which type of Machine Learning uses labeled data (e.g., images with names 'Cat', 'Dog')?",
      options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Magic Learning"],
      correct: "Supervised Learning",
      explanation: "Supervised Learning involves training a model on a labeled dataset, where the correct answer is provided for each example."
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

const url = "src/content/learn/machine-learning/module-2/2-6-types-of-ml.mdx";
const file = "C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-6-types-of-ml.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/ggiri/Documents/new-vs-code/website/src/content/learn/machine-learning/module-2/2-6-types-of-ml.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
