export function setProjectUrl(projectId: string) {
  const url = new URL(window.location.href);
  url.searchParams.set('project', projectId);
  url.hash = '';

  window.history.replaceState(null, '', `${url.pathname}${url.search}`);
}
