export type filterTypes =
  'priceRange' |
  'brand' |
  'color' |
  'os' |
  'internalMemory' |
  'ram' |
  'displaySize' |
  'displayResolution' |
  'camera' |
  'cpu';

export type filterValues =
  '<250' | '250-500' | '500-750' | '750-1000' |'1000-1500'|'2000-2500'|'2500-3000'|'3000-3500'|
  'samsung' | 'apple' | 'huawei' | 'lg' | 'htc' |'Asus'  | 'Lenevo' | 'HP' | 'Dell' | 'Razer' | 'MSI' |'Acer' |
  'black' | 'white' | 'grey' |'Silver' |
  'android' | 'ios' |'Windows'|'macOS'|
  '16' | '64' | '128' | '256' |'512' | '1024' |
  '1' | '3' | '4' | '6' |'8' | '16' |
  '4.5' | '5.1' | '5.5' | '5.8' | '6.0' | '6.3' |'13.3' | '14' | '15' | '15.6' | 
  '540x960' | '1080x1920' | '1125x2436' | '1440x2560' | '1440x2880' | '1440x2960' |'1920 X 1080' | '2160 X 1080' | '3840 X 2160' |
  '8' | '12' | '13' | '16' |
  'dual_core' |'quad_core' | 'hexa_core' | 'octa_core';