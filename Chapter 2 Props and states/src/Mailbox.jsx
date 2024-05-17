
function Mailbox({ unreadMessages }) {
    unreadMessages = [1, 2, 3, 99];
    const age=null;
    return (
        <>

            {unreadMessages.length > 0 && (
                <h3>
                    You have {unreadMessages.length} unread messages.
                </h3>

            )}
            <h1>Hello {unreadMessages < 0 || 'Guest'}</h1>
            <h1>Hello {age ?? 'not known'}</h1>
        </>
    )
}

export default Mailbox;