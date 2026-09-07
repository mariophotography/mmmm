import { NOTARY_INFO } from '../data/notariaData';

export function downloadNotaryVCard() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Ramos Dávalos;Marcelo;Dr.;;
FN:${NOTARY_INFO.name} - ${NOTARY_INFO.notaryOffice} de Riobamba
ORG:${NOTARY_INFO.notaryOffice} del ${NOTARY_INFO.canton}
TITLE:${NOTARY_INFO.title}
TEL;TYPE=WORK,VOICE:${NOTARY_INFO.phoneLandline}
TEL;TYPE=CELL,VOICE:${NOTARY_INFO.phoneMobile}
EMAIL;TYPE=PREF,INTERNET:${NOTARY_INFO.email}
ADR;TYPE=WORK:;;${NOTARY_INFO.address};Riobamba;Chimborazo;;Ecuador
NOTE:${NOTARY_INFO.reference}. Horario: ${NOTARY_INFO.hours}
URL:https://notariasextariobamba.ec
END:VCARD`;

  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Notaria_Sexta_Riobamba.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
