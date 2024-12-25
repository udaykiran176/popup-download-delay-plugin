import { __ } from '@wordpress/i18n';
import { Button, TextareaControl, RangeControl, TextControl, ColorPicker } from '@wordpress/components';
import { useBlockProps, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { fileUrl, timerDuration, adsCode, buttonText, buttonTextColor, buttonBgColor } = attributes;

    // Update the Google Ads code in attributes
    const updateAdsCode = (code) => {
        setAttributes({ adsCode: code });
    };

    // Update the Timer Duration in attributes
    const updateTimerDuration = (duration) => {
        setAttributes({ timerDuration: duration });
    };

    // Update the Button Text
    const updateButtonText = (text) => {
        setAttributes({ buttonText: text });
    };

    // Update the Button Text Color
    const updateButtonTextColor = (color) => {
        setAttributes({ buttonTextColor: color });
    };

    // Update the Button Background Color
    const updateButtonBgColor = (color) => {
        setAttributes({ buttonBgColor: color });
    };

    // Select the file from the media library
    const onSelectFile = (media) => {
        setAttributes({ fileUrl: media.url });
    };

    
    const buttonStyle = {
        color: buttonTextColor || '#fff', // Default text color
        backgroundColor: buttonBgColor || '#000', // Default background color
    };
    

    return (
        <div { ...useBlockProps() }>
            <h2>{ __('Popup Download File', 'popup-delay-download') }</h2>
            <p>{ __('Pick one from your media library.', 'popup-delay-download') }</p>

            <MediaUpload
                onSelect={ onSelectFile }
                allowedTypes={ ['application/pdf', 'application/zip', 'image/*'] }
                render={({ open }) => (
                    <Button onClick={ open } variant="primary">
                        { !fileUrl ? __('Select File', 'popup-delay-download') : __('Change File', 'popup-delay-download') }
                    </Button>
                )}
            />

            { fileUrl && (
                <p>{ __('Selected file:', 'popup-delay-download') } <a href={ fileUrl } target="_blank" rel="noopener noreferrer">{ fileUrl }</a></p>
            )}

            <a 
                    className="file-download-btn" 
                    href="#" 
                    id="openPopupBtn" 
                    style={ buttonStyle }  // Apply styles in the editor
                >
                    { buttonText || 'Download' }  {/* Default text */}
            </a>

            <InspectorControls>
                <PanelBody title={ __('Settings', 'popup-delay-download') }>
                    {/* Timer Duration */}
                    <RangeControl
                        label={ __('Timer Duration (seconds)', 'popup-delay-download') }
                        value={ timerDuration }
                        onChange={ updateTimerDuration }
                        min={ 5 }
                        max={ 60 }
                    />
                    
                    {/* Google Ads Code */}
                    <TextareaControl
                        label={ __('Google Ads Code', 'popup-delay-download') }
                        value={ adsCode }
                        onChange={ updateAdsCode }
                        help={ __('Insert your Google Ads code here.', 'popup-delay-download') }
                    />

                    {/* Button Text */}
                    <TextControl
                        label={ __('Button Text', 'popup-delay-download') }
                        value={ buttonText || 'Download' }  // Default text
                        onChange={ updateButtonText }
                    />
                    
                    {/* Button Text Color */}
                    <ColorPicker
					    label={ __('Text color', 'popup-delay-download') }
                        color={ buttonTextColor || '#000000' }  // Default color
                        onChangeComplete={ (color) => updateButtonTextColor(color.hex) }
                        disableAlpha
						help={ __('Button Text Color.', 'popup-delay-download') }
                    />
                    
                    {/* Button Background Color */}
                    <ColorPicker
					    label={ __('Background Color', 'popup-delay-download') }
                        color={ buttonBgColor || '#0073aa' }  // Default background color
                        onChangeComplete={ (color) => updateButtonBgColor(color.hex) }
                        disableAlpha
						help={ __('Button Background Color.', 'popup-delay-download') }
                    />
                </PanelBody>
            </InspectorControls>
        </div>
    );
}
