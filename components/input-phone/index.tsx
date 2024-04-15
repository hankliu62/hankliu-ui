// @ts-nocheck
import React, { useMemo } from 'react';
import type { CSSProperties, FocusEvent } from 'react';
import type { InputSizes } from 'antd4x/lib/input/Input';
import cs from 'classnames';
import Input from '../input';
import Select from '../select';
import { getLocale } from './locale';
import PhoneOption from './phone-option';

const LIST = [
  { cn: '阿富汗', en: 'Afghanistan', phone_code: '+93' },
  { cn: '阿尔巴尼亚', en: 'Albania', phone_code: '+355' },
  { cn: '阿尔及利亚', en: 'Algeria', phone_code: '+213' },
  { cn: '美属萨摩亚', en: 'American Samoa', phone_code: '+684' },
  { cn: '安道尔', en: 'Andorra', phone_code: '+376' },
  { cn: '安哥拉', en: 'Angola', phone_code: '+244' },
  { cn: '安圭拉', en: 'Anguilla', phone_code: '+1264' },
  { cn: '南极洲', en: 'Antarctica', phone_code: '+672' },
  { cn: '安提瓜和巴布达', en: 'Antigua and Barbuda', phone_code: '+1268' },
  { cn: '阿根廷', en: 'Argentina', phone_code: '+54' },
  { cn: '亚美尼亚', en: 'Armenia', phone_code: '+374' },
  { cn: '阿鲁巴', en: 'Aruba', phone_code: '+297' },
  {
    cn: '澳大利亚/圣诞岛/科科斯（基林）群岛',
    en: 'Australia/Christmas Island/Cocos (Keeling) Islands',
    phone_code: '+61',
  },
  { cn: '奥地利', en: 'Austria', phone_code: '+43' },
  { cn: '阿塞拜疆', en: 'Azerbaijan', phone_code: '+994' },
  { cn: '巴林', en: 'Bahrain', phone_code: '+973' },
  { cn: '孟加拉国', en: 'Bangladesh', phone_code: '+880' },
  { cn: '巴巴多斯', en: 'Barbados', phone_code: '+1246' },
  { cn: '白俄罗斯', en: 'Belarus', phone_code: '+375' },
  { cn: '比利时', en: 'Belgium', phone_code: '+32' },
  { cn: '伯利兹', en: 'Belize', phone_code: '+501' },
  { cn: '贝宁', en: 'Benin', phone_code: '+229' },
  { cn: '百慕大', en: 'Bermuda', phone_code: '+1441' },
  { cn: '不丹', en: 'Bhutan', phone_code: '+975' },
  { cn: '玻利维亚', en: 'Bolivia', phone_code: '+591' },
  { cn: '波黑', en: 'Bosnia and Herzegovina', phone_code: '+387' },
  { cn: '博茨瓦纳', en: 'Botswana', phone_code: '+267' },
  { cn: '巴西', en: 'Brazil', phone_code: '+55' },
  { cn: '英属维尔京群岛', en: 'British Virgin Islands', phone_code: '+1284' },
  { cn: '文莱', en: 'Brunei Darussalam', phone_code: '+673' },
  { cn: '保加利亚', en: 'Bulgaria', phone_code: '+359' },
  { cn: '布基纳法索', en: 'Burkina Faso', phone_code: '+226' },
  { cn: '缅甸', en: 'Burma', phone_code: '+95' },
  { cn: '布隆迪', en: 'Burundi', phone_code: '+257' },
  { cn: '柬埔寨', en: 'Cambodia', phone_code: '+855' },
  { cn: '喀麦隆', en: 'Cameroon', phone_code: '+237' },
  {
    cn: '美国/加拿大/北马里亚纳',
    en: 'United States/Canada/Northern Mariana Islands',
    phone_code: '+1',
  },
  { cn: '佛得角', en: 'Cape Verde', phone_code: '+238' },
  { cn: '开曼群岛', en: 'Cayman Islands', phone_code: '+1345' },
  { cn: '中非', en: 'Central African Republic', phone_code: '+236' },
  { cn: '乍得', en: 'Chad', phone_code: '+235' },
  { cn: '智利', en: 'Chile', phone_code: '+56' },
  { cn: '中国', en: 'China', phone_code: '+86' },

  { cn: '哥伦比亚', en: 'Colombia', phone_code: '+57' },
  { cn: '科摩罗/马约特', en: 'Comoros/Mayotte', phone_code: '+269' },
  {
    cn: '刚果（金）',
    en: 'Democratic Republic of the Congo',
    phone_code: '+243',
  },
  { cn: '刚果（布）', en: 'Republic of the Congo', phone_code: '+242' },
  { cn: '库克群岛', en: 'Cook Islands', phone_code: '+682' },
  { cn: '哥斯达黎加', en: 'Costa Rica', phone_code: '+506' },
  { cn: '科特迪瓦', en: "Cote d'Ivoire", phone_code: '+225' },
  { cn: '克罗地亚', en: 'Croatia', phone_code: '+385' },
  { cn: '古巴', en: 'Cuba', phone_code: '+53' },
  { cn: '塞浦路斯', en: 'Cyprus', phone_code: '+357' },
  { cn: '捷克', en: 'Czech Republic', phone_code: '+420' },
  { cn: '丹麦', en: 'Denmark', phone_code: '+45' },
  { cn: '吉布提', en: 'Djibouti', phone_code: '+253' },
  { cn: '多米尼克', en: 'Dominica', phone_code: '+1767' },
  {
    cn: '多米尼加/波多黎各',
    en: 'Dominican Republic/Puerto Rico',
    phone_code: '+1809',
  },
  { cn: '厄瓜多尔', en: 'Ecuador', phone_code: '+593' },
  { cn: '埃及', en: 'Egypt', phone_code: '+20' },
  { cn: '萨尔瓦多', en: 'El Salvador', phone_code: '+503' },
  { cn: '赤道几内亚', en: 'Equatorial Guinea', phone_code: '+240' },
  { cn: '厄立特里亚', en: 'Eritrea', phone_code: '+291' },
  { cn: '爱沙尼亚', en: 'Estonia', phone_code: '+372' },
  { cn: '埃塞俄比亚', en: 'Ethiopia', phone_code: '+251' },
  {
    cn: '福克兰群岛（马尔维纳斯）',
    en: 'Falkland Islands (Islas Malvinas)',
    phone_code: '+500',
  },
  { cn: '法罗群岛', en: 'Faroe Islands', phone_code: '+298' },
  { cn: '斐济', en: 'Fiji', phone_code: '+679' },
  { cn: '芬兰', en: 'Finland', phone_code: '+358' },
  { cn: '法国', en: 'France', phone_code: '+33' },
  { cn: '法属圭亚那', en: 'French Guiana', phone_code: '+594' },
  { cn: '法属波利尼西亚', en: 'French Polynesia', phone_code: '+689' },
  { cn: '加蓬', en: 'Gabon', phone_code: '+241' },
  { cn: '格鲁吉亚', en: 'Georgia', phone_code: '+995' },
  { cn: '德国', en: 'Germany', phone_code: '+49' },
  { cn: '加纳', en: 'Ghana', phone_code: '+233' },
  { cn: '直布罗陀', en: 'Gibraltar', phone_code: '+350' },
  { cn: '希腊', en: 'Greece', phone_code: '+30' },
  { cn: '格陵兰', en: 'Greenland', phone_code: '+299' },
  { cn: '格林纳达', en: 'Grenada', phone_code: '+1473' },
  { cn: '瓜德罗普', en: 'Guadeloupe', phone_code: '+590' },
  { cn: '关岛', en: 'Guam', phone_code: '+1671' },
  { cn: '危地马拉', en: 'Guatemala', phone_code: '+502' },
  { cn: '根西岛', en: 'Guernsey', phone_code: '+1481' },
  { cn: '几内亚', en: 'Guinea', phone_code: '+224' },
  { cn: '几内亚比绍', en: 'Guinea-Bissau', phone_code: '+245' },
  { cn: '圭亚那', en: 'Guyana', phone_code: '+592' },
  { cn: '海地', en: 'Haiti', phone_code: '+509' },
  { cn: '梵蒂冈', en: 'Holy See (Vatican City)', phone_code: '+379' },
  { cn: '洪都拉斯', en: 'Honduras', phone_code: '+504' },
  { cn: '香港', en: 'Hong Kong (SAR)', phone_code: '+852' },
  { cn: '匈牙利', en: 'Hungary', phone_code: '+36' },
  { cn: '冰岛', en: 'Iceland', phone_code: '+354' },
  { cn: '印度', en: 'India', phone_code: '+91' },
  { cn: '印度尼西亚', en: 'Indonesia', phone_code: '+62' },
  { cn: '伊朗', en: 'Iran', phone_code: '+98' },
  { cn: '伊拉克', en: 'Iraq', phone_code: '+964' },
  { cn: '爱尔兰', en: 'Ireland', phone_code: '+353' },
  { cn: '以色列', en: 'Israel', phone_code: '+972' },
  { cn: '意大利', en: 'Italy', phone_code: '+39' },
  { cn: '牙买加', en: 'Jamaica', phone_code: '+1876' },
  { cn: '日本', en: 'Japan', phone_code: '+81' },
  { cn: '约旦', en: 'Jordan', phone_code: '+962' },
  { cn: '哈萨克斯坦', en: 'Kazakhstan', phone_code: '+73' },
  { cn: '肯尼亚', en: 'Kenya', phone_code: '+254' },
  { cn: '基里巴斯', en: 'Kiribati', phone_code: '+686' },
  { cn: '朝鲜', en: 'North Korea', phone_code: '+850' },
  { cn: '韩国', en: 'South Korea', phone_code: '+82' },
  { cn: '科威特', en: 'Kuwait', phone_code: '+965' },
  { cn: '吉尔吉斯斯坦', en: 'Kyrgyzstan', phone_code: '+996' },
  { cn: '老挝', en: 'Laos', phone_code: '+856' },
  { cn: '拉脱维亚', en: 'Latvia', phone_code: '+371' },
  { cn: '黎巴嫩', en: 'Lebanon', phone_code: '+961' },
  { cn: '莱索托', en: 'Lesotho', phone_code: '+266' },
  { cn: '利比里亚', en: 'Liberia', phone_code: '+231' },
  { cn: '利比亚', en: 'Libya', phone_code: '+218' },
  { cn: '列支敦士登', en: 'Liechtenstein', phone_code: '+423' },
  { cn: '立陶宛', en: 'Lithuania', phone_code: '+370' },
  { cn: '卢森堡', en: 'Luxembourg', phone_code: '+352' },
  { cn: '澳门', en: 'Macao', phone_code: '+853' },
  {
    cn: '前南马其顿',
    en: 'The Former Yugoslav Republic of Macedonia',
    phone_code: '+389',
  },
  { cn: '马达加斯加', en: 'Madagascar', phone_code: '+261' },
  { cn: '马拉维', en: 'Malawi', phone_code: '+265' },
  { cn: '马来西亚', en: 'Malaysia', phone_code: '+60' },
  { cn: '马尔代夫', en: 'Maldives', phone_code: '+960' },
  { cn: '马里', en: 'Mali', phone_code: '+223' },
  { cn: '马耳他', en: 'Malta', phone_code: '+356' },
  { cn: '马绍尔群岛', en: 'Marshall Islands', phone_code: '+692' },
  { cn: '马提尼克', en: 'Martinique', phone_code: '+596' },
  { cn: '毛里塔尼亚', en: 'Mauritania', phone_code: '+222' },
  { cn: '毛里求斯', en: 'Mauritius', phone_code: '+230' },
  { cn: '墨西哥', en: 'Mexico', phone_code: '+52' },
  {
    cn: '密克罗尼西亚',
    en: 'Federated States of Micronesia',
    phone_code: '+691',
  },
  { cn: '摩尔多瓦', en: 'Moldova', phone_code: '+373' },
  { cn: '摩纳哥', en: 'Monaco', phone_code: '+377' },
  { cn: '蒙古', en: 'Mongolia', phone_code: '+976' },
  { cn: '蒙特塞拉特', en: 'Montserrat', phone_code: '+1664' },
  { cn: '摩洛哥', en: 'Morocco', phone_code: '+212' },
  { cn: '莫桑比克', en: 'Mozambique', phone_code: '+258' },
  { cn: '纳米尼亚', en: 'Namibia', phone_code: '+264' },
  { cn: '瑙鲁', en: 'Nauru', phone_code: '+674' },
  { cn: '尼泊尔', en: 'Nepal', phone_code: '+977' },
  { cn: '荷兰', en: 'Netherlands', phone_code: '+31' },
  { cn: '荷属安的列斯', en: 'Netherlands Antilles', phone_code: '+599' },
  { cn: '新喀里多尼亚', en: 'New Caledonia', phone_code: '+687' },
  { cn: '新西兰', en: 'New Zealand', phone_code: '+64' },
  { cn: '尼加拉瓜', en: 'Nicaragua', phone_code: '+505' },
  { cn: '尼日尔', en: 'Niger', phone_code: '+227' },
  { cn: '尼日利亚', en: 'Nigeria', phone_code: '+234' },
  { cn: '纽埃', en: 'Niue', phone_code: '+683' },
  { cn: '诺福克岛', en: 'Norfolk Island', phone_code: '+6723' },
  { cn: '挪威/斯瓦尔巴岛和扬马延岛', en: 'Norway/Svalbard', phone_code: '+47' },
  { cn: '阿曼', en: 'Oman', phone_code: '+968' },
  { cn: '巴基斯坦', en: 'Pakistan', phone_code: '+92' },
  { cn: '帕劳', en: 'Palau', phone_code: '+680' },
  { cn: '巴拿马', en: 'Panama', phone_code: '+507' },
  { cn: '巴布亚新几内亚', en: 'Papua New Guinea', phone_code: '+675' },
  { cn: '巴拉圭', en: 'Paraguay', phone_code: '+595' },
  { cn: '秘鲁', en: 'Peru', phone_code: '+51' },
  { cn: '菲律宾', en: 'Philippines', phone_code: '+63' },
  { cn: '波兰', en: 'Poland', phone_code: '+48' },
  { cn: '葡萄牙', en: 'Portugal', phone_code: '+351' },
  { cn: '卡塔尔', en: 'Qatar', phone_code: '+974' },
  { cn: '留尼汪', en: 'Reunion', phone_code: '+262' },
  { cn: '罗马尼亚', en: 'Romania', phone_code: '+40' },
  { cn: '俄罗斯', en: 'Russia', phone_code: '+7' },
  { cn: '卢旺达', en: 'Rwanda', phone_code: '+250' },
  { cn: '圣赫勒拿', en: 'Saint Helena', phone_code: '+290' },
  { cn: '圣基茨和尼维斯', en: 'Saint Kitts and Nevis', phone_code: '+1869' },
  { cn: '圣卢西亚', en: 'Saint Lucia', phone_code: '+1758' },
  {
    cn: '圣皮埃尔和密克隆',
    en: 'Saint Pierre and Miquelon',
    phone_code: '+508',
  },
  {
    cn: '圣文森特和格林纳丁斯',
    en: 'Saint Vincent and the Grenadines',
    phone_code: '+1784',
  },
  { cn: '萨摩亚', en: 'Samoa', phone_code: '+685' },
  { cn: '圣马力诺', en: 'San Marino', phone_code: '+378' },
  { cn: '圣多美和普林西比', en: 'Sao Tome and Principe', phone_code: '+239' },
  { cn: '沙特阿拉伯', en: 'Saudi Arabia', phone_code: '+966' },
  { cn: '塞内加尔', en: 'Senegal', phone_code: '+221' },
  { cn: '塞尔维亚和黑山', en: 'Serbia and Montenegro', phone_code: '+381' },
  { cn: '塞舌尔', en: 'Seychelles', phone_code: '+248' },
  { cn: '塞拉利', en: 'Sierra Leone', phone_code: '+232' },
  { cn: '新加坡', en: 'Singapore', phone_code: '+65' },
  { cn: '斯洛伐克', en: 'Slovakia', phone_code: '+421' },
  { cn: '斯洛文尼亚', en: 'Slovenia', phone_code: '+386' },
  { cn: '所罗门群岛', en: 'Solomon Islands', phone_code: '+677' },
  { cn: '索马里', en: 'Somalia', phone_code: '+252' },
  { cn: '南非', en: 'South Africa', phone_code: '+27' },
  { cn: '西班牙', en: 'Spain', phone_code: '+34' },
  { cn: '斯里兰卡', en: 'Sri Lanka', phone_code: '+94' },
  { cn: '苏丹', en: 'Sudan', phone_code: '+249' },
  { cn: '苏里南', en: 'Suriname', phone_code: '+597' },
  { cn: '斯威士兰', en: 'Swaziland', phone_code: '+268' },
  { cn: '瑞典', en: 'Sweden', phone_code: '+46' },
  { cn: '瑞士', en: 'Switzerland', phone_code: '+41' },
  { cn: '叙利亚', en: 'Syria', phone_code: '+963' },
  { cn: '台湾', en: 'Taiwan', phone_code: '+886' },
  { cn: '塔吉克斯坦', en: 'Tajikistan', phone_code: '+992' },
  { cn: '坦桑尼亚', en: 'Tanzania', phone_code: '+255' },
  { cn: '泰国', en: 'Thailand', phone_code: '+66' },
  { cn: '巴哈马', en: 'The Bahamas', phone_code: '+1242' },
  { cn: '冈比亚', en: 'The Gambia', phone_code: '+220' },
  { cn: '多哥', en: 'Togo', phone_code: '+228' },
  { cn: '托克劳', en: 'Tokelau', phone_code: '+690' },
  { cn: '汤加', en: 'Tonga', phone_code: '+676' },
  { cn: '特立尼达和多巴哥', en: 'Trinidad and Tobago', phone_code: '+1868' },
  { cn: '突尼斯', en: 'Tunisia', phone_code: '+216' },
  { cn: '土耳其', en: 'Turkey', phone_code: '+90' },
  { cn: '土库曼斯坦', en: 'Turkmenistan', phone_code: '+993' },
  {
    cn: '特克斯和凯科斯群岛',
    en: 'Turks and Caicos Islands',
    phone_code: '+1649',
  },
  { cn: '图瓦卢', en: 'Tuvalu', phone_code: '+688' },
  { cn: '乌干达', en: 'Uganda', phone_code: '+256' },
  { cn: '乌克兰', en: 'Ukraine', phone_code: '+380' },
  { cn: '阿拉伯联合酋长国', en: 'United Arab Emirates', phone_code: '+971' },
  { cn: '英国', en: 'United Kingdom', phone_code: '+44' },

  { cn: '乌拉圭', en: 'Uruguay', phone_code: '+598' },
  { cn: '乌兹别克斯坦', en: 'Uzbekistan', phone_code: '+998' },
  { cn: '瓦努阿图', en: 'Vanuatu', phone_code: '+678' },
  { cn: '委内瑞拉', en: 'Venezuela', phone_code: '+58' },
  { cn: '越南', en: 'Vietnam', phone_code: '+84' },
  { cn: '美属维尔京群岛', en: 'Virgin Islands', phone_code: '+1340' },
  { cn: '瓦利斯和富图纳', en: 'Wallis and Futuna', phone_code: '+681' },
  { cn: '也门', en: 'Yemen', phone_code: '+967' },
  { cn: '赞比亚', en: 'Zambia', phone_code: '+260' },
  { cn: '津巴布韦', en: 'Zimbabwe', phone_code: '+263' },
];

function filterOption(inputValue: string, option: any) {
  const value = inputValue.toLowerCase();
  const { code, name } = option.title.props;
  return code.indexOf(value) > -1 || name.toLowerCase().indexOf(value) > -1;
}

export interface InputPhoneProps {
  placeholder?: string;
  defaultAreaCode?: string;
  areaCode: string;
  onAreaCodeChange: (name: string) => void;
  phone: string;
  onPhoneChange: (phone: string) => void;
  onPhoneBlur?: (e: FocusEvent) => void;
  onPhoneFocus?: (e: FocusEvent) => void;
  className?: string;
  style?: CSSProperties;
  size?: typeof InputSizes[number];
}

export default function InputPhone({
  size,
  className,
  style,
  defaultAreaCode = '+86',
  areaCode,
  onAreaCodeChange,
  phone,
  onPhoneChange,
  onPhoneBlur,
  onPhoneFocus,
  placeholder = getLocale().placeholder,
}: InputPhoneProps) {
  const options = useMemo(
    () =>
      LIST.map((item) => ({
        title: <PhoneOption code={item.phone_code} name={item.en} />,
        value: item.phone_code,
      })),
    [],
  );
  return (
    <div className={cs('hlui-input-phone', className)} style={style}>
      <Select
        size={size}
        showSearch
        style={{
          width: 100,
        }}
        dropdownMatchSelectWidth={false}
        className="hlui-input-phone-select"
        filterOption={filterOption}
        options={options}
        fieldNames={{
          label: 'title',
        }}
        optionLabelProp="value"
        defaultValue={defaultAreaCode}
        value={areaCode}
        onChange={onAreaCodeChange}
      />
      <Input
        size={size}
        placeholder={placeholder}
        className="hlui-input-phone-input"
        value={phone}
        onChange={(e) => {
          onPhoneChange(e.target.value);
        }}
        onBlur={onPhoneBlur}
        onFocus={onPhoneFocus}
      />
    </div>
  );
}
