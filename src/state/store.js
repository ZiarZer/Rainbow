import { reactive } from 'vue';
import { getCookie } from '../utils/cookies';

export const store = reactive({
  colorFormat: getCookie('colorFormat') ?? 'hex',
});
