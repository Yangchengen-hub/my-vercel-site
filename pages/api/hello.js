export default function handler(req, res) {
  res.status(200).json({ 
    message: '现在时间：' + new Date().toLocaleTimeString() 
  });
}
