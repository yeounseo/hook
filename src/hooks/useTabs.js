const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    }
];

const useTabs = (initialTab, allTabs) => {
    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

const App = () => {
    const [currentItem, changeItem] = useTabs(0, content);
    return (
        <div className="App">
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.teb}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
};


// useState를 이용해서 useTab 만들기