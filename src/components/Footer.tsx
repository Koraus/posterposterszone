

export const Footer = () => {
    return (
        <footer style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            backgroundColor: '#66bcdf'
        }}>
            <div> Contact Information</div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <ul style={{ marginTop: 0 }}>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div> Newsletter Subscription
                <form>
                    <input type="text" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </form>
            </div>
        </footer>
    );
}