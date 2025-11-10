
import React, { useState, useEffect } from 'react';

// Inform TypeScript that `marked` is available on the window object
declare global {
    interface Window {
        marked: any;
    }
}

const defaultMarkdown = `
# Welcome to the Cosmic Markdown Previewer!

## Type your Markdown on the left, and see the magic on the right.

---

### Key Features:

- **Real-time preview:** Updates as you type.
- **Modern UI:** A clean, responsive, dual-panel layout.
- **Copy HTML:** Easily grab the generated HTML code.

### Basic Syntax Examples:

**Emphasis:**
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

**Lists:**
1. First ordered list item
2. Another item
   * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list

**Links:**
[Visit my GitHub](https://github.com/hsinidev)

**Code:**
Inline \`code\` has \`back-ticks around\` it.

\`\`\`javascript
// Code block
function greet() {
  console.log("Hello, developer!");
}
greet();
\`\`\`

**Blockquotes:**
> "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself."
> - Carl Sagan

**Tables:**
| Feature    | Support |
|------------|---------|
| Real-time  | Yes     |
| Responsive | Yes     |
| Awesome    | Yes     |

**Images:**
![A placeholder image](https://picsum.photos/300/200)

Start typing to explore more!
`;

const MarkdownPreviewer: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>(defaultMarkdown);
    const [html, setHtml] = useState<string>('');
    const [copyStatus, setCopyStatus] = useState<string>('Copy HTML');

    useEffect(() => {
        if (window.marked) {
            setHtml(window.marked.parse(markdown));
        }
    }, [markdown]);

    const handleClear = () => {
        setMarkdown('');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(html).then(() => {
            setCopyStatus('Copied!');
            setTimeout(() => setCopyStatus('Copy HTML'), 2000);
        }).catch(err => {
            setCopyStatus('Failed!');
            console.error('Failed to copy HTML: ', err);
            setTimeout(() => setCopyStatus('Copy HTML'), 2000);
        });
    };

    return (
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
                {/* Input Panel */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-center p-3 bg-gray-800 border-b border-gray-700">
                        <h2 className="text-lg font-semibold text-white">Markdown Input</h2>
                        <button
                            onClick={handleClear}
                            className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors"
                        >
                            Clear Input
                        </button>
                    </div>
                    <textarea
                        value={markdown}
                        onChange={(e) => setMarkdown(e.target.value)}
                        className="w-full h-full p-4 bg-gray-900 text-gray-300 font-mono resize-none focus:outline-none flex-grow min-h-[35vh] md:min-h-0"
                        placeholder="Type your Markdown here..."
                    />
                </div>

                {/* Preview Panel */}
                <div className="flex flex-col border-t-2 border-indigo-500 md:border-t-0 md:border-l-2 md:border-indigo-500">
                    <div className="flex justify-between items-center p-3 bg-gray-800 border-b border-gray-700">
                        <h2 className="text-lg font-semibold text-white">HTML Live Preview</h2>
                        <button
                            onClick={handleCopy}
                            className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors"
                        >
                            {copyStatus}
                        </button>
                    </div>
                    <div
                        id="preview"
                        className="p-4 prose prose-dark max-w-none overflow-y-auto flex-grow"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MarkdownPreviewer;
