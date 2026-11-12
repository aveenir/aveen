// Opens [data-zoom] links in the shared <dialog class="lightbox">. Native dialog
// gives focus trapping, Escape to close and focus return for free.
export function initLightbox(): void {
  const dialog = document.querySelector<HTMLDialogElement>('dialog.lightbox');
  const img = dialog?.querySelector('img');
  if (!dialog || !img || typeof dialog.showModal !== 'function') return;

  document.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[data-zoom]');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    img.src = link.href;
    img.alt = link.dataset.zoomAlt ?? '';
    dialog.showModal();
  });

  // Click on the backdrop (the dialog box itself, outside the image) closes it.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => img.removeAttribute('src'));
}
