import { generatePredicateVersionName } from '@src/utils';

const rootAddresses = [
  '0x379cc51194ba4c6288b1dae9cfe7e758a95d268cf5525c3ffb6b0c3bef941872',
  '0x379cc51194ba4c6288b1dae9cfe7e758a95d268cf5525c3ffb6b0c3bef941871',
];

export const predicateVersions = [
  {
    name: generatePredicateVersionName(rootAddresses[0]),
    rootAddress: rootAddresses[0],
    abi: JSON.stringify({
      types: [
        { typeId: 0, type: '[_; 10]', components: [Array], typeParameters: null },
        { typeId: 1, type: 'b256', components: null, typeParameters: null },
        { typeId: 2, type: 'bool', components: null, typeParameters: null },
        { typeId: 3, type: 'u64', components: null, typeParameters: null },
      ],
      functions: [{ inputs: [], name: 'main', output: [Object], attributes: null }],
      loggedTypes: [],
      messagesTypes: [],
      configurables: [
        { name: 'SIGNERS', configurableType: [Object], offset: 5068 },
        { name: 'SIGNATURES_COUNT', configurableType: [Object], offset: 5052 },
        { name: 'HASH_PREDICATE', configurableType: [Object], offset: 5020 },
      ],
    }),
    bytes:
      '0x740000034700000000000000000013345dfcc00110fff3001aec500091000fb81a4000005d47f00a264400001a5070005047b87072480020284504805d43f00a285114005d43f00b264000001a6470001a6c00001a5400005d6bf00b5d43f00a1641b400764002df6140000113450000764400061341004076400001360000005043ba901a401000740000025043ba901a400000134500007644000613410040764000025d43f00c364000006160010574000001616000075043bb785d47f03f1045130072480020284114805047bbf85d4bf03f10492300724c0020284524c0a141046013410000764002bd5043bb985d47f03f1045130072480020284114805047bc185d4bf03f10492300724c0020284524c0a1410460134100001a5c00001a580000764002ad16417600764000065d43f01115416400764000025d43f0111341640024400000614d74015043b6d072440090284134405d43b0da13410000764000e9614174015047b9501ae900001ae5100020f8330058fbe00250fbe0047400037f1a43d0005047bec07248004028450480506fbec01a400000264000001a707000134550001a40000076440020134000007640001a10400540154500007644000174000008264000001a4470001548000076480001740000021a4800002845c4801a7110001a4c000016453540764400031a440000264400007400000c1a4400001045c440104514c0104994c05c4920005e452000104d30407500000b1a400000264000001a4150001a7190005d47f040104513005d4bf04010492300504fbea072500020284d15005047bea04245c4005043bf10724c0020284114c05043bf10724400201b4404401047b440724c0020284524c0724400201b4414401047b440724c0020284524c05047b420724800402847b480504bbe40724c0040284914c05047be40504bb040724c00402849b4c0504fb6b072500020284d05003e4524c01a408000134100407640000a5043b5e85fec00bd5047be4050490008724c0040284914c0504bbae07244004828490440740000065043b3d85fec107b5fec0083504bbae072440048284904405043bd7872440048284124405043b76072440048284124405d43b15c13410040764000365043bd785047b81872480048284504805d43b1af1341000076400001360000005043b818504100085047bd2872480040284504805043bd28724400201b440440104504405043bd28724800201b481480104904805043b4a0724c0020284114c050450020724c0020284524c05047ba4072480040284504805043b9b01ae910001ae5000020f8330058fbe00250fbe004740003071a43d0005047bc7872480020284504805043b5685fec00ad5047bc78504bb0c0724c0020284914c050450008724c0020284524c0504bbb2872440028284904407400000a5043b760504100405047b3a05fec107450491020724c0008284904c0504bbb2872400028284914005d43f041104103005047b7a8724c0028284524c05d47b16513451000504fbb5072480020284d048076440001740000095043b7a8504100085047bdc072480020284504805043bdc0504fbb5072440020284d04405043be8072440020284134405043be801a6c00005d47f0121645b4401a48000076440001740000135047b2605d4bf04210492300724c0140284524c0724800201b49b480104914805047bbd8724c0020284504c0504fbc5872500020284d2500a14514e01a48100076440002106db04075000016105964805043bb70740001b35043b6d0504100085047bf3072480088284504805d43f03b104134005d47b1ee504bb8b01ae900001ae510001ae1200020f8330058fbe00250fbe004740002041a47d000504bbd68724c0010284914c05047bd68504bb630724c0010284914c05d512001504bb640724c0010284914c05d6d20005d47b1ee1b441440104504405d4bb1ef504fb8c01ae910001ae520001ae1300020f8330058fbe00250fbe004740001eb1a47d000504bbf00724c0010284914c05047bf00504bb650724c0010284914c05d712001504bb660724c0010284914c05d7520005d47b1ee1b441440104104405d47b1ef1b441440104104405d47b1f0504bb8d01ae900001ae510001ae1200020f8330058fbe00250fbe004740001cf1a43d0005047bc9872480010284504805043bc985047b67072480010284504805d7910015047b68072480010284504805d7d10005043b9201ae9000020f8330058fbe00250fbe0047400022c1a43d0005d8100005d4500015d8500021341400076400021134210007640001a10421500154904407648000174000007264000001a487000154d1000764c000174000001284a04401a8120001a4c000016453500764400051a440000264400001a8500001a4500007400000c10460840104514c01049b4c05c4920005e452000104d30407500000c1a400000264000001a8540001a4540001a81b0001341500076400021134210007640001a10421540154904407648000174000007264000001a487000154d1000764c000174000001284a04401a8120001a4c000016453540764400051a440000264400001a8500001a4500007400000c10460840104514c0104994c05c4920005e452000104d30407500000c1a400000264000001a8550001a45a0001a8190001341c00076400021134210007640001a10421700154904407648000174000007264000001a487000154d1000764c000174000001284a04401a8120001a4c000016453700764400051a440000264400001a8500001a4500007400000c10460840104514c01049d4c05c4920005e452000104d30407500000c1a400000264000001a85c0001a45c0001a81d0005043b9d05fee013a5fed113b5fee113c5047b8e01ae900001ae5100020f8330058fbe00250fbe004740001621a43d0005047bca872480020284504805043b9381ae9000020f8330058fbe00250fbe004740001aa1a43d0005d5100005d7100015d6d00021341e000764000211341b0007640001a1041b780154507007644000174000007264000001a4470001549c0007648000174000001284547001a5110001a4c000016453780764400051a440000264400001a6d00001a7100007400000c104546c0104514c01049f4c05c4920005e452000104d30407500000c1a400000264000001a6de0001a71e0001a51f0005043bca85d47f00a264400001a447000504bb890724c0020284904c05d43f00a284524005d43f00a13410000764000231341b0007640001c5d43f00a1041b400154907007648000174000007264000001a487000154dc000764c000174000001284947001a5120001a7000005d4bf00a1649c480764800051a440000264400001a6d00001a7100007400000c104946c010492700104d17005c4d30005e4930001071c0407500000d1a400000264000005d6ff00a5d73f00a1a5110005d43f040104103005047b9e85fed413d5fedc13e5fedb13f504bb9001ae910001ae5200020f8330058fbe00250fbe004740000f51a47d000504bbcc8724c0020284914c05047bf30504bbcc8504fb080725000201b50050010513500726c0020285106c0725000201b50150010513500726c0020285106c05043b4607250004028413500504fbe0072500040284d05005043be00504fb0e072500040284d15005047b69072500020284525003f4134401a408000134100407640000a5043b5a05fec00b45047be0050490008724c0040284914c0504bba987244004828490440740000065043b4e05fec109c5fec00a4504bba9872440048284904405043b7d072440048284124405d43b1531341000076400001360000005043b7d0504100085047bce872480040284504805043bce8724400201b440440104504405043bce8724800201b481480104904805043b528724c0020284114c050450020724c0020284524c05047ba0072480040284504805043b9901ae910001ae5000020f8330058fbe00250fbe004740001241a43d0005047bde072480020284504805043bde01a6c00005d47f0121645b4401a48000076440001740000135047b1205d4bf04210492300724c0140284524c0724800201b49b480104914805047bbb8724c0020284504c0504fbc3872500020284d2500a14514e01a48100076440002106db04075000016105964805043bb70105d7040750002ab24000000240000005d43f00a164106c0764000025d43f00a134106c07640000a104146c05047b5905fec10b25c4100005049100f5e490000504bba807240001028491400740000055043b3c85fec0079504bba8072440010284904405043b86072440010284124405d43b1501341004076400001360000005043b8605041000f5c4100005d47f043104513005d4bf03c1f490480724c00011b4924c0104914805c4520001349568076480001740000101349a0001a4c1000764800025d4bf03d1b4d2680154936807648000174000007264c00001a4870001559a0007658000174000001284996801a6520001a693000104995405e491000104550405d4bf043104923005c4ff1f0114104c0724c00011b4104c0104124005c4100001349168076480001740000101349a0001a4c1000764800025d4bf03d1b4d2680154936807648000174000007264c00001a4870001555a0007654000174000001284996801a6520001a693000104994405e49000010551040106db0407500033d1af05000910000285ff100005ff110015ff120025ff130035ff3b0041aec5000910000101a43a0001a4790001a4b80001a4fe0001b4510405fed00005fed10011a43b00072440010284904401af52000920000101af9300059f050285d43c0005d47c0015d4bc0025d4fc0035defc004920000284af800001af05000910000505ff100005ff110015ff120025ff130035ff140045ff150055ff160065ff170075ff180085ff3b0091aec5000910000201a43a0001a4790001a4be0001a4c0000264c00001a4c70005d5100005d5500025d410002134100001a58000076400020134000007640001a10580540154160007640000174000008265800001a407000155c0000765c0001740000021a5c0000284135c01a4d00001a60000016418540764000031a400000264000007400000c1a4000001041340010410600105d46005c5d70005e417000106180407500000b1a400000264000001a5950001a4d40005d43f040104103007250002028ed05001a43b00042413580724c0020284504c01af51000920000201af9200059f050505d43c0005d47c0015d4bc0025d4fc0035d53c0045d57c0055d5bc0065d5fc0075d63c0085defc009920000504af800001af05000910000205ff100005ff110015ff120025ff3b0031aec5000910000001a43a0001a47e0001a480000264800001a4870005f4120005f4000015f4000021af50000920000001af9100059f050205d43c0005d47c0015d4bc0025defc003920000204af800001af05000910000285ff100005ff110015ff120025ff130035ff3b0041aec5000910000001a43a0001a4790001a4be000724c0040284504c01af51000920000001af9200059f050285d43c0005d47c0015d4bc0025d4fc0035defc004920000284af800001af05000910000385ff100005ff110015ff120025ff130035ff140045ff150055ff3b0061aec5000910000781a4ba0001a4f90001a53e0005d57f040105553001a400000264000001a4070005fed00085fec00095fec000a5043b0407244004028ed24401aebb0001ae5000020f8330058fbe00250fbe004740000165043b05872440020284154405043b0585d47b0085d4bb00a4241148072440020284d04401af53000920000781af9400059f050385d43c0005d47c0015d4bc0025d4fc0035d53c0045d57c0055defc006920000384af800001af05000910000585ff100005ff110015ff120025ff130035ff140045ff150055ff160065ff170075ff180085ff190095ff3b00a1aec5000910000401a43a0001a6790001a63e0005d47f00a264400001a4470007248002028ed04801a4bb0005d4d20005d5120015d5520025d4920035f4530005f4540015f4550025f4520035d4bf00a134920007648002c5d49900213492000764800225d4990025d4ff00a104924c05d4d90025d5190005d559001155925407658000174000007264800001a587000155d5000765c000174000001285945401a5160005f6540001a5800005d53f00a16516500765000055f6520015f6520021a440000264400007400000f5d519000105144c010514580105515805c5550005e515000105960407500000e5f6510005d47f00a5f6510015d47f00a5f6510021a44000026440000504100205d47f00a264400001a447000504bb020724c0020284904c05d4120005d4d20015d5120025d4920035f4500005f4530015f4540025f4520035d43f00a134100007640002c5d41900213410000764000225d4190025d4bf00a104104805d4990025d4d90005d519001155505007654000174000007264000001a547000155940007658000174000001285535001a4d50005f6530001a5400005d4ff00a164d54c0764c00055f6500015f6500021a400000264000007400000f5d4d9000104d3480104d3540105115405c5140005e4d4000105550407500000e5f6510005d43f00a5f6500015d43f00a5f6500021a400000264000001af40000920000401af9800059f050585d43c0005d47c0015d4bc0025d4fc0035d53c0045d57c0055d5bc0065d5fc0075d63c0085d67c0095defc00a920000584af8000047000000111111111111111111111111111111111111111111111111111111111111111130313233343536373839616263646566000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000040cccccccccccc000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000400000000000000020f00000000000000000000000000139c0000000000001364000000000000133400000000000013cc0000000000001354',
  },
  {
    name: generatePredicateVersionName(rootAddresses[1]),
    rootAddress: rootAddresses[1],
    abi: JSON.stringify({
      types: [
        { typeId: 0, type: '[_; 10]', components: [Array], typeParameters: null },
        { typeId: 1, type: 'b256', components: null, typeParameters: null },
        { typeId: 2, type: 'bool', components: null, typeParameters: null },
        { typeId: 3, type: 'u64', components: null, typeParameters: null },
      ],
      functions: [{ inputs: [], name: 'main', output: [Object], attributes: null }],
      loggedTypes: [],
      messagesTypes: [],
      configurables: [
        { name: 'SIGNERS', configurableType: [Object], offset: 5068 },
        { name: 'SIGNATURES_COUNT', configurableType: [Object], offset: 5052 },
        { name: 'HASH_PREDICATE', configurableType: [Object], offset: 5020 },
      ],
    }),
    bytes:
      '0x740000034700000000000000000013345dfcc00110fff3001aec500091000fb81a4000005d47f00a264400001a5070005047b87072480020284504805d43f00a285114005d43f00b264000001a6470001a6c00001a5400005d6bf00b5d43f00a1641b400764002df6140000113450000764400061341004076400001360000005043ba901a401000740000025043ba901a400000134500007644000613410040764000025d43f00c364000006160010574000001616000075043bb785d47f03f1045130072480020284114805047bbf85d4bf03f10492300724c0020284524c0a141046013410000764002bd5043bb985d47f03f1045130072480020284114805047bc185d4bf03f10492300724c0020284524c0a1410460134100001a5c00001a580000764002ad16417600764000065d43f01115416400764000025d43f0111341640024400000614d74015043b6d072440090284134405d43b0da13410000764000e9614174015047b9501ae900001ae5100020f8330058fbe00250fbe0047400037f1a43d0005047bec07248004028450480506fbec01a400000264000001a707000134550001a40000076440020134000007640001a10400540154500007644000174000008264000001a4470001548000076480001740000021a4800002845c4801a7110001a4c000016453540764400031a440000264400007400000c1a4400001045c440104514c0104994c05c4920005e452000104d30407500000b1a400000264000001a4150001a7190005d47f040104513005d4bf04010492300504fbea072500020284d15005047bea04245c4005043bf10724c0020284114c05043bf10724400201b4404401047b440724c0020284524c0724400201b4414401047b440724c0020284524c05047b420724800402847b480504bbe40724c0040284914c05047be40504bb040724c00402849b4c0504fb6b072500020284d05003e4524c01a408000134100407640000a5043b5e85fec00bd5047be4050490008724c0040284914c0504bbae07244004828490440740000065043b3d85fec107b5fec0083504bbae072440048284904405043bd7872440048284124405043b76072440048284124405d43b15c13410040764000365043bd785047b81872480048284504805d43b1af1341000076400001360000005043b818504100085047bd2872480040284504805043bd28724400201b440440104504405043bd28724800201b481480104904805043b4a0724c0020284114c050450020724c0020284524c05047ba4072480040284504805043b9b01ae910001ae5000020f8330058fbe00250fbe004740003071a43d0005047bc7872480020284504805043b5685fec00ad5047bc78504bb0c0724c0020284914c050450008724c0020284524c0504bbb2872440028284904407400000a5043b760504100405047b3a05fec107450491020724c0008284904c0504bbb2872400028284914005d43f041104103005047b7a8724c0028284524c05d47b16513451000504fbb5072480020284d048076440001740000095043b7a8504100085047bdc072480020284504805043bdc0504fbb5072440020284d04405043be8072440020284134405043be801a6c00005d47f0121645b4401a48000076440001740000135047b2605d4bf04210492300724c0140284524c0724800201b49b480104914805047bbd8724c0020284504c0504fbc5872500020284d2500a14514e01a48100076440002106db04075000016105964805043bb70740001b35043b6d0504100085047bf3072480088284504805d43f03b104134005d47b1ee504bb8b01ae900001ae510001ae1200020f8330058fbe00250fbe004740002041a47d000504bbd68724c0010284914c05047bd68504bb630724c0010284914c05d512001504bb640724c0010284914c05d6d20005d47b1ee1b441440104504405d4bb1ef504fb8c01ae910001ae520001ae1300020f8330058fbe00250fbe004740001eb1a47d000504bbf00724c0010284914c05047bf00504bb650724c0010284914c05d712001504bb660724c0010284914c05d7520005d47b1ee1b441440104104405d47b1ef1b441440104104405d47b1f0504bb8d01ae900001ae510001ae1200020f8330058fbe00250fbe004740001cf1a43d0005047bc9872480010284504805043bc985047b67072480010284504805d7910015047b68072480010284504805d7d10005043b9201ae9000020f8330058fbe00250fbe0047400022c1a43d0005d8100005d4500015d8500021341400076400021134210007640001a10421500154904407648000174000007264000001a487000154d1000764c000174000001284a04401a8120001a4c000016453500764400051a440000264400001a8500001a4500007400000c10460840104514c01049b4c05c4920005e452000104d30407500000c1a400000264000001a8540001a4540001a81b0001341500076400021134210007640001a10421540154904407648000174000007264000001a487000154d1000764c000174000001284a04401a8120001a4c000016453540764400051a440000264400001a8500001a4500007400000c10460840104514c0104994c05c4920005e452000104d30407500000c1a400000264000001a8550001a45a0001a8190001341c00076400021134210007640001a10421700154904407648000174000007264000001a487000154d1000764c000174000001284a04401a8120001a4c000016453700764400051a440000264400001a8500001a4500007400000c10460840104514c01049d4c05c4920005e452000104d30407500000c1a400000264000001a85c0001a45c0001a81d0005043b9d05fee013a5fed113b5fee113c5047b8e01ae900001ae5100020f8330058fbe00250fbe004740001621a43d0005047bca872480020284504805043b9381ae9000020f8330058fbe00250fbe004740001aa1a43d0005d5100005d7100015d6d00021341e000764000211341b0007640001a1041b780154507007644000174000007264000001a4470001549c0007648000174000001284547001a5110001a4c000016453780764400051a440000264400001a6d00001a7100007400000c104546c0104514c01049f4c05c4920005e452000104d30407500000c1a400000264000001a6de0001a71e0001a51f0005043bca85d47f00a264400001a447000504bb890724c0020284904c05d43f00a284524005d43f00a13410000764000231341b0007640001c5d43f00a1041b400154907007648000174000007264000001a487000154dc000764c000174000001284947001a5120001a7000005d4bf00a1649c480764800051a440000264400001a6d00001a7100007400000c104946c010492700104d17005c4d30005e4930001071c0407500000d1a400000264000005d6ff00a5d73f00a1a5110005d43f040104103005047b9e85fed413d5fedc13e5fedb13f504bb9001ae910001ae5200020f8330058fbe00250fbe004740000f51a47d000504bbcc8724c0020284914c05047bf30504bbcc8504fb080725000201b50050010513500726c0020285106c0725000201b50150010513500726c0020285106c05043b4607250004028413500504fbe0072500040284d05005043be00504fb0e072500040284d15005047b69072500020284525003f4134401a408000134100407640000a5043b5a05fec00b45047be0050490008724c0040284914c0504bba987244004828490440740000065043b4e05fec109c5fec00a4504bba9872440048284904405043b7d072440048284124405d43b1531341000076400001360000005043b7d0504100085047bce872480040284504805043bce8724400201b440440104504405043bce8724800201b481480104904805043b528724c0020284114c050450020724c0020284524c05047ba0072480040284504805043b9901ae910001ae5000020f8330058fbe00250fbe004740001241a43d0005047bde072480020284504805043bde01a6c00005d47f0121645b4401a48000076440001740000135047b1205d4bf04210492300724c0140284524c0724800201b49b480104914805047bbb8724c0020284504c0504fbc3872500020284d2500a14514e01a48100076440002106db04075000016105964805043bb70105d7040750002ab24000000240000005d43f00a164106c0764000025d43f00a134106c07640000a104146c05047b5905fec10b25c4100005049100f5e490000504bba807240001028491400740000055043b3c85fec0079504bba8072440010284904405043b86072440010284124405d43b1501341004076400001360000005043b8605041000f5c4100005d47f043104513005d4bf03c1f490480724c00011b4924c0104914805c4520001349568076480001740000101349a0001a4c1000764800025d4bf03d1b4d2680154936807648000174000007264c00001a4870001559a0007658000174000001284996801a6520001a693000104995405e491000104550405d4bf043104923005c4ff1f0114104c0724c00011b4104c0104124005c4100001349168076480001740000101349a0001a4c1000764800025d4bf03d1b4d2680154936807648000174000007264c00001a4870001555a0007654000174000001284996801a6520001a693000104994405e49000010551040106db0407500033d1af05000910000285ff100005ff110015ff120025ff130035ff3b0041aec5000910000101a43a0001a4790001a4b80001a4fe0001b4510405fed00005fed10011a43b00072440010284904401af52000920000101af9300059f050285d43c0005d47c0015d4bc0025d4fc0035defc004920000284af800001af05000910000505ff100005ff110015ff120025ff130035ff140045ff150055ff160065ff170075ff180085ff3b0091aec5000910000201a43a0001a4790001a4be0001a4c0000264c00001a4c70005d5100005d5500025d410002134100001a58000076400020134000007640001a10580540154160007640000174000008265800001a407000155c0000765c0001740000021a5c0000284135c01a4d00001a60000016418540764000031a400000264000007400000c1a4000001041340010410600105d46005c5d70005e417000106180407500000b1a400000264000001a5950001a4d40005d43f040104103007250002028ed05001a43b00042413580724c0020284504c01af51000920000201af9200059f050505d43c0005d47c0015d4bc0025d4fc0035d53c0045d57c0055d5bc0065d5fc0075d63c0085defc009920000504af800001af05000910000205ff100005ff110015ff120025ff3b0031aec5000910000001a43a0001a47e0001a480000264800001a4870005f4120005f4000015f4000021af50000920000001af9100059f050205d43c0005d47c0015d4bc0025defc003920000204af800001af05000910000285ff100005ff110015ff120025ff130035ff3b0041aec5000910000001a43a0001a4790001a4be000724c0040284504c01af51000920000001af9200059f050285d43c0005d47c0015d4bc0025d4fc0035defc004920000284af800001af05000910000385ff100005ff110015ff120025ff130035ff140045ff150055ff3b0061aec5000910000781a4ba0001a4f90001a53e0005d57f040105553001a400000264000001a4070005fed00085fec00095fec000a5043b0407244004028ed24401aebb0001ae5000020f8330058fbe00250fbe004740000165043b05872440020284154405043b0585d47b0085d4bb00a4241148072440020284d04401af53000920000781af9400059f050385d43c0005d47c0015d4bc0025d4fc0035d53c0045d57c0055defc006920000384af800001af05000910000585ff100005ff110015ff120025ff130035ff140045ff150055ff160065ff170075ff180085ff190095ff3b00a1aec5000910000401a43a0001a6790001a63e0005d47f00a264400001a4470007248002028ed04801a4bb0005d4d20005d5120015d5520025d4920035f4530005f4540015f4550025f4520035d4bf00a134920007648002c5d49900213492000764800225d4990025d4ff00a104924c05d4d90025d5190005d559001155925407658000174000007264800001a587000155d5000765c000174000001285945401a5160005f6540001a5800005d53f00a16516500765000055f6520015f6520021a440000264400007400000f5d519000105144c010514580105515805c5550005e515000105960407500000e5f6510005d47f00a5f6510015d47f00a5f6510021a44000026440000504100205d47f00a264400001a447000504bb020724c0020284904c05d4120005d4d20015d5120025d4920035f4500005f4530015f4540025f4520035d43f00a134100007640002c5d41900213410000764000225d4190025d4bf00a104104805d4990025d4d90005d519001155505007654000174000007264000001a547000155940007658000174000001285535001a4d50005f6530001a5400005d4ff00a164d54c0764c00055f6500015f6500021a400000264000007400000f5d4d9000104d3480104d3540105115405c5140005e4d4000105550407500000e5f6510005d43f00a5f6500015d43f00a5f6500021a400000264000001af40000920000401af9800059f050585d43c0005d47c0015d4bc0025d4fc0035d53c0045d57c0055d5bc0065d5fc0075d63c0085d67c0095defc00a920000584af8000047000000111111111111111111111111111111111111111111111111111111111111111130313233343536373839616263646566000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000040cccccccccccc000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000400000000000000020f00000000000000000000000000139c0000000000001364000000000000133400000000000013cc0000000000001378',
  },
];