import PublicationLoopItem from "./loop/item";

const PublicationList = ({ publications }) => {
    const groupedItems = [];
    for (let i = 0; i < publications.length; i += 3) {
        groupedItems.push(publications.slice(i, i + 3));
    }

    return (
        <>
            {groupedItems.map((group, index) => (
                <div key={index} className={`item-group space-y-16 ${index % 2 == 0 ? 'max-sm:mt-16 mt-80' : ''} flex flex-col max-sm:gap-[0.732rem] gap-[2rem] md:gap-[2.439rem] xl:gap-[2.668rem] 2xl:gap-[2.813rem] 3xl:gap-[3.75rem] 4xl:gap-[5rem]`}>
                    {group.map((publication, idx) => (
                        <PublicationLoopItem key={idx} publication={publication} />
                    ))}
                </div>
            ))}
        </>
    );
};

export default PublicationList;