import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState('加载中...');

  // 调用服务端API（动态部分！）
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🎉 动态网站测试</h1>
      <p>服务端返回的数据：{data}</p>
    </div>
  );
}
