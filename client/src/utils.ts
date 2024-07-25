export function removeNonNumericCharacters(uuid: string) {
  return uuid.replace(/\D/g, '');
}

export type OS = {
  uuid: string,
  nome: string,
  email: string,
  fone: string,
  setor: string,
  problema: string,
  descricao: string,
  prioridade: string,
  descricaoTec: string,
  status: number,
  created_at: string,
  updated_at: string
}

export interface IOS {
  uuid: string;
  nome: string;
  email: string;
  fone: string;
  setor: string;
  problema: string;
  descricao: string;
  prioridade: string;
  descricaoTec: string;
  status: number;
  created_at: string;
  updated_at: string;
}
