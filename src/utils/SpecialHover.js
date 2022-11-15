export function hoverEnter(id) {
  const section = document.getElementById(id);
  const labels = section.getElementsByTagName('label');
  const final = labels[labels.length - 1];

  final.style.backgroundColor = 'rgba(232, 116, 116, 30%)';
}

export function hoverLeave(id) {
  const section = document.getElementById(id);
  const labels = section.getElementsByTagName('label');
  const final = labels[labels.length - 1];

  final.style.backgroundColor = '';
}

export function hoverEnterRm(id) {
  const section = document.getElementById(id);
  section.style.backgroundColor = 'rgba(232, 116, 116, 30%)';
}

export function hoverLeaveRm(id) {
  const section = document.getElementById(id);
  section.style.backgroundColor = '#f9f9f9';
}
