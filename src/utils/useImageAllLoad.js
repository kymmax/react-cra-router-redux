import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const useImageAllLoad = (props) => {

    const [onload, setOnload] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // 在這裡檢查當前路由，執行相應的操作
        // console.log('頁面載入了:', location.pathname);

        // 加載所有圖片
        const images = document.querySelectorAll('img');
        const promises = [];        

        images.forEach((image) => {
            const promise = new Promise((resolve) => {

                if(!image.src) resolve();                

                if (image.complete) {
                    // 如果圖片已經被瀏覽器緩存，標記為已加載
                    image.classList.remove('img-loading');
                    image.classList.add('img-loaded');
                    resolve();
                } else {
                    // 監聽圖片加載事件
                    image.onload = () => {
                        image.classList.remove('img-loading');
                        image.classList.add('img-loaded');
                        resolve(); // resolve Promise
                    };
                }
            });
            promises.push(promise);
        });

        Promise.all(promises).then(() => {
            // console.log('所有圖片已經加載完畢');
            // 在這裡執行所有圖片都加載完畢後的操作
            setOnload(true);
        });

        // 返回清理函數（可選）
        return () => {
            // 在組件卸載時執行清理操作
        };
    }, [location.pathname,props]); // 僅在路由改變時觸發

    return onload;
}

export default useImageAllLoad;



  