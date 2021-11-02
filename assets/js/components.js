const linkComponent = (title, icon_classes, url) => {
  return `
    <div>
        <a href="${url}" target="_blank" class="links , hover">
        <i class="${icon_classes} links-in"></i>
        ${title}</a>
    </div>
  `
}