import { HeaderHindi } from './hindi';
import { HeaderBangla } from './bangla';
import { HeaderEnglish } from './english';
import { HeaderGujarati } from './gujarati';
import { HeaderMarathi } from './marathi'
import { HeadeUrdu } from './urdu'

const common = [
    { code: 'en', content: HeaderEnglish },
    { code: 'hn', content: HeaderHindi },
    { code: 'bn', content: HeaderBangla },
    { code: 'gj', content: HeaderGujarati },
    { code: 'mr', content: HeaderMarathi },
    { code: 'ur', content: HeadeUrdu }
]

export { common }