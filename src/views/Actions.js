import eyeBlueIcon from "../assets/svg/eye_blue.js"

export default (billUrl, billName) => {
  return (
    `<div class="icon-actions">
      <div id="eye" data-testid="icon-eye" data-bill-url=${billUrl} name="${billName}">
      ${eyeBlueIcon}
      </div>
    </div>`
  )
}