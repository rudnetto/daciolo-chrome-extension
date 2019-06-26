export const RULES = [
  {
    nome: 'gloria',
    descricao: '',
    selector: /(gl[oó]ria)+/gim,
    target: '$& a deuxxx'
  },
  {
    nome: 'brnation',
    descricao: '',
    selector: /brasil(eir)?(a|o)?/gim,
    target: 'NAÇÃO BRASILEIRA'
  },
  {
    nome: 'ursal',
    descricao: '',
    selector: /(PSDB?|PTC?B?|PPS?L?|MDB|PSL|PDT|PCO|PCdoB|DEM|PSOL|PSB|PCB|PSC|PSTU|NOVO|PV|REDE|PRB?P?(OS)?(TB)?|PRB|PRP|PMN|PHS|SD|DC|AVANTE|PODE|PMB)/gm,
    target: 'URSAL'
  },
];
