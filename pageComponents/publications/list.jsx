import PublicationLoopItem from "./loop/item";

const PublicationList = ({ publications }) => {
    const groupedItems = [];
    for (let i = 0; i < publications.length; i += 3) {
        groupedItems.push(publications.slice(i, i + 3));
    }

    return (
        <>
            {groupedItems.map((group, index) => (
                <div key={index} className={`item-group space-y-16 ${index % 2 == 0 ? 'mt-80' : ''} flex flex-col gap-[64px]`}>
                    {group.map((publication, idx) => (
                        <PublicationLoopItem key={idx} publication={publication} />
                    ))}
                </div>
            ))}
        </>
    );
};

export default PublicationList;