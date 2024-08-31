/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps , MediaUpload }  from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { fileUrl } = attributes;

	const onSelectFile = (media) => {
		setAttributes({ fileUrl: media.url });
	};

	return (
		<div { ...useBlockProps() }>
			<p  class="file-description">
				{ __('popup download File', 'popup-delay-download') }
			</p>
			<p class="file-description">
				{ __(' pick one from your media library.', 'popup-delay-download') }
			</p>
			<MediaUpload
				onSelect={ onSelectFile }
				allowedTypes={ [ 'application/pdf', 'application/zip', 'image/*' ] }
				render={ ({ open }) => (
					<Button onClick={ open } variant="primary">
						{ !fileUrl ? __('Select File', 'popup-delay-download') : __('Change File', 'popup-delay-download') }
					</Button>
				)}
			/>
			{ fileUrl && (
				<p  class="file-description">{ __('Selected file:', 'popup-delay-download') } <a href={ fileUrl } target="_blank" rel="noopener noreferrer">{ fileUrl }</a></p>
			) }
		</div>
	);
}
