import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { fileUrl, timerDuration, adsCode, buttonText, buttonTextColor, buttonBgColor } = attributes;

    const buttonStyle = {
        color: buttonTextColor || '#fff', // Default text color
        backgroundColor: buttonBgColor || '#000', // Default background color
    };

    return (
        <div { ...useBlockProps.save() }>
            { fileUrl ? (
                <>
                    <a 
                        className="file-download-btn" 
                        href="#" 
                        id="openPopupBtn" 
                        style={ buttonStyle }  // Apply dynamic styles
                    >
                        { buttonText || 'Download' }  {/* Default text */}
                    </a>
                    <div id="popup" className="popup" data-timer-duration={ timerDuration }>
                        <div className="popup-content">
                            <span className="close-btn" id="closePopupBtn">&times;</span>
                            <div className="popup-flex">
                                <div className="pop-ads">
                                    {/* Display the Google Ads code */}
                                    <div dangerouslySetInnerHTML={{ __html: adsCode }} />
                                </div>
                                <div className="container">
                                    <h3 style={{ fontSize: '18px', padding: '0px', margin: '0px' }}>
                                        Your download will begin shortly...
                                    </h3>
                                    <p id="timer">{ timerDuration } seconds remaining</p>
                                    <a 
                                        id="download-link" 
                                        className="confirm-download-btn" 
                                        href={ fileUrl } 
                                        style={{ display: 'none' }} 
                                        download 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        {'Download File'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p className="file-download-btn">{ 'No file attached.' }</p>
            )}
        </div>
    );
}
