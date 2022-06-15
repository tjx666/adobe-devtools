import csInterface from './CSInterface';

// 定义 CMD + R 刷新页面快捷键
const keyEventsInterest = [
    {
        keyCode: 15,
        metaKey: true,
    },
];
csInterface.registerKeyEventsInterest(JSON.stringify(keyEventsInterest));

window.addEventListener('keydown', (e) => {
    if (e.metaKey && e.key === 'r') {
        window.location.reload();
    }
});
