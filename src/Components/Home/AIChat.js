
// src/components/FancyChatBot.js
import React, { useState } from 'react';
import { marked } from 'marked';
import { FaRobot, FaTimes } from 'react-icons/fa';
import  doctorbot  from '../../images/doctor bot.jpg';
const FancyChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleToggle = () => setOpen(!open);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { from: 'user', content: input }
    ];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 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',
          'HTTP-Referer': 'http://localhost:3000', // Replace with your domain
          'X-Title': 'Daktar Bari', // Replace with your app/site name
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-r1:free',
          messages: [
            { role: 'system', content: 'You are a friendly and helpful AI assistant for medical advice.' },
            ...newMessages.map((msg) => ({
              role: msg.from === 'user' ? 'user' : 'assistant',
              content: msg.content,
            })),
          ]
        })
      });

      const data = await res.json();
      const botReply = data?.choices?.[0]?.message?.content || 'server busy'
      setMessages([...newMessages, { from: 'bot', content: botReply }]);
    } catch (err) {
      setMessages([...newMessages, { from: 'bot', content: '❌ Error: ' + err.message }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 bg-purple-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl z-50 hover:bg-purple-700"
      >
       <img src={doctorbot} className="bg-white" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div style={{ backgroundColor: '#07C0BA' }} className=" text-white flex justify-between items-center px-4 py-3 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <FaRobot className="text-white text-xl" />
              <div>
                <h4 className="text-sm font-semibold leading-tight">FastAid AI Assistent</h4>
                <p className="text-xs  text-left">● Online Now</p>
              </div>
            </div>
            <button className="text-white text-lg" onClick={handleToggle}>
              <FaTimes  />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 overflow-y-auto max-h-96 space-y-3 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.from === 'bot' && (
                  <div className="mr-2 flex-shrink-0">
                    <FaRobot style={{ color: '#07C0BA' }} className="text-xl" />
                  </div>
                )}

                <div style={{ backgroundColor: '#07C0BA' }}
                  className= {`px-4 py-2 max-w-[75%] text-white text-justify rounded-xl whitespace-pre-line leading-relaxed ${
                    msg.from === 'user'
                      ? 'rounded-br-none'
                      : 'rounded-bl-none'
                  }`}
                  dangerouslySetInnerHTML={{ __html: marked.parse(msg.content) }}
                />
              </div>
            ))}

            {loading && (
              <div style={{ color: '#07C0BA' }} className="italic text-xs text-left">Typing...</div>
            )}
          </div>

          {/* Input Field */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <input
              type="text"
              className="w-full border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Reply to LeadBot..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FancyChatBot;


















































// // src/components/AIChat.js
// import React, { useState } from 'react';
// import { marked } from 'marked';

// const AIChat = () => {
//   const [input, setInput] = useState('');
//   const [reply, setReply] = useState(''); 
//   const [loading, setLoading] = useState(false);

//   const sendMessage = async () => {
//     setReply('');
//     if (!input.trim()) {
//       setReply('Please enter a message.');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           Authorization: 'Bearer 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',
//           'HTTP-Referer': 'http://localhost:3000', // Replace with your domain
//           'X-Title': 'Daktar Bari', // Replace with your app/site name
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           model: 'deepseek/deepseek-r1:free',
//           messages: [{ role: 'user', content: input }],
//         }),
//       });

//       const data = await response.json();
//       const markdownText = data?.choices?.[0]?.message?.content || 'No response received.';
//       setReply(marked.parse(markdownText));
//     } catch (error) {
//       setReply('❌ Error: ' + error.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Free ChatBot</h2>
//       <div className="form-group">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter your question"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//       </div>
//       <button className="btn btn-success" onClick={sendMessage}>
//         Ask!
//       </button>

//       <div id="response" className="mt-3 p-3 border rounded" style={{ minHeight: '60px' }}>
//         {loading ? 'Loading...' : <div dangerouslySetInnerHTML={{ __html: reply }} />}
//       </div>
//     </div>
//   );
// };

// export default AIChat;