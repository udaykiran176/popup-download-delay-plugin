/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { fileUrl } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			{ fileUrl ? (
				<>
					<a class="file-download-btn" href="#" id="openPopupBtn">
						{ 'Download' }
					</a>
					<div id="popup" class="popup">
						<div class="popup-content">
							<span class="close-btn" id="closePopupBtn">&times;</span>
							<div class="popup-flex">
								<div class="pop-ads">
									<img src="https://codepen.tech/wp-content/uploads/2024/08/codepen-block.png" alt="Google AdSense" />
								</div>
								<div class="container">
									<h3 style={{fontSize: '18px', padding: '0px', margin: '0px'}} >Your download will begin shortly...</h3>
									<p id="timer">30 seconds remaining</p>
									<a id="download-link"  className="confirm-download-btn"  href={ fileUrl } style="display: none;" download target="_blank" rel="noopener noreferrer">
									{ 'Download File' }
									</a>	
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<p class="file-download-btn">{ 'No file attached.' }</p>
			)}
		
		</div>
	);
}


