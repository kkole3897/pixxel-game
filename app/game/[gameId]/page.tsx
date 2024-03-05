import Image from 'next/image';
import Link from 'next/link';
import { faker } from '@faker-js/faker';

import * as styles from './page.css';
import { GenreBadge } from '@/app/components/genre-badge';
import { StoreLink } from './components/store-link';
import { PriceHistoryChart } from './components/price-history-chart';
import { MetaScore, UserScore } from './components/game-scores/meta-critic';
import {
  Rating,
  TopCritic,
  RecommendPercent,
} from './components/game-scores/open-critic';
import { ScoreBar } from './components/game-scores/steam';
import { Gallery } from './components/gallery';
import { Description } from './components/description';

export default function GameDetailPage({
  params,
}: {
  params: { gameId: string };
}) {
  const history = [
    { date: '2024-02-01', steam: 68000 },
    { date: '2024-02-02', steam: 68000 },
    { date: '2024-02-03', steam: 58000 },
    { date: '2024-02-04', steam: 58000 },
    { date: '2024-02-05', steam: 58000 },
    { date: '2024-02-06', steam: 48000 },
    { date: '2024-02-07', steam: 68000 },
    { date: '2024-02-08', steam: 68000 },
    { date: '2024-02-09', steam: 68000 },
    { date: '2024-02-10', steam: 68000 },
    { date: '2024-02-11', steam: 68000 },
    { date: '2024-02-12', steam: 58000 },
    { date: '2024-02-13', steam: 58000 },
    { date: '2024-02-14', steam: 68000 },
    { date: '2024-02-15', steam: 68000 },
    { date: '2024-02-16', steam: 68000 },
    { date: '2024-02-17', steam: 68000 },
    { date: '2024-02-18', steam: 68000 },
  ];

  function getContents(length: number): { url: string }[] {
    const contents = Array.from({ length }).map(() => {
      return {
        url: faker.image.urlLoremFlickr({
          height: 1080,
          width: 1200,
        }),
      };
    });

    return contents;
  }

  const descriptionContent = `<h2>게임에 대해</h2>
  <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/extras/Larian_Steam_new_KeyArt_ready.gif?t=1705604554"><br><br>일행을 모으고 포가튼 렐름으로 돌아가세요. 동료애, 배신, 희생, 생존, 그리고 절대적인 힘의 유혹을 다루는 이야기가 펼쳐집니다.<br><br>여러분의 내면에서 불가사의한 능력이 깨어나고 있습니다. 머릿속에 심어진 마인드 플레이어 기생체에서 비롯한 힘이죠. 기생체에 저항하고 어둠에는 어둠으로 맞서거나 타락을 받아들이고 궁국의 악이 되어 보세요.<br><br>디비니티: 오리지널 신 2의 개발진이 던전 앤 드래곤의 세계를 무대로 하는 차세대 RPG를 선보입니다.<br><br><br><br><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/extras/Gather_new.gif?t=1705604554"><br><br>D&amp;D 플레이어즈 핸드북에서 등장한 12개의 직업과 11개의 종족 중에서 선택해 여러분만의 캐릭터를 만들거나, 손수 제작된 배경을 지닌 오리진 영웅으로 플레이하세요. 아니면 독특한 메커니즘과 독자적인 이야기를 갖췄으며 하나부터 열까지 세세하게 설정할 수 있는 오리진 영웅 '어두운 충동'이 되어 내면의 타락에 맞서 보세요. 어떤 캐릭터를 선택하든, 포가튼 렐름과 그 너머까지 모험과 보물, 전투와 로맨스를 즐길 수 있습니다. 그러니, 일행을 모으세요. 최대 4명의 친구들과 일행을 구성해 모험을 온라인으로 즐기셔도 좋습니다.<br><br><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/extras/An_expansive_original_story.png?t=1705604554"><br><br>여러분은 납치되고 감염됐으며, 갈 길을 잃고 서서히 괴물로 변하고 있습니다. 하지만 내면의 타락이 깊어질수록, 여러분의 힘 또한 강력해지고 있죠. 그 힘은 생존에는 도움이 될지 모르나, 그에 따른 대가를 피해 갈 순 없습니다. 그리고 다른 어떠한 능력보다도 일행과 쌓는 신뢰가 여러분에게 크나큰 도움이 돼줄 것입니다. 악마와 신, 그리고 다른 차원에서 온 사악한 세력 간의 싸움에 휘말리게 된 여러분은 일행과 함께 포가튼 렐름의 운명을 결정하게 됩니다.<br><br><br><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/extras/Next_Gen_new.gif?t=1705604554"><br><br>새로 개발된 디비니티 4.0 엔진으로 구현된 발더스 게이트 3에서는 다양한 캐릭터와 위험, 거짓으로 가득 찬 융성한 세계를 전에 없던 방식으로 자유롭게 탐사하고, 실험하고, 상호 작용할 수 있습니다. 또한, 막대한 스케일의 극적인 서사를 통해 캐릭터들에게 한층 더 깊이 몰입할 수 있죠. 그림자 저주에 걸린 숲부터 언더다크의 마법 동굴, 그리고 발더스 게이트의 광활한 도시까지 다양한 장소를 무대로 여러분이 취하는 행동은 여러분의 모험을, 여러분이 내리는 선택은 여러분의 유산을 정의할 겁니다. 여러분은 기억될 것입니다.<br><br><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/extras/Experience_Depth.png?t=1705604554"><br><br>포가튼 렐름은 방대하고 세세하며 다양성을 지닌 세계입니다. 여러분의 주변에는 비밀이 가득한데, 탐사할 때는 위아래를 잘 살펴보는 것이 중요하죠. 은밀히 이동하고, 물속을 살피거나, 물체를 밀쳐 보세요. 그리고 등반과 도약으로 언더다크 깊은 곳부터 반짝이는 발더스 게이트의 옥상까지 여정을 이어 나가세요. 여러분의 선택 하나하나가 이야기를 진행시키며, 여러분이 내리는 결정은 저마다 이 세계에 흔적을 남깁니다. 여러분의 방식대로 유산을 만들고, 관계를 형성하고, 적을 만들고, 문제를 해결하세요. 게임을 새로 플레이할 때마다 전과는 다른 경험을 하게 될 겁니다.<br><br><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/extras/01_Bullets_points.png?t=1705604554"><br><ul class="bb_ul">온라인 멀티플레이를 통해 힘을 합쳐 전투를 치르고 적을 동시에 공격할 수 있으며, 일행을 나눠 각자 퀘스트를 진행하거나 볼일을 볼 수 있습니다. 친구와 함께 완벽한 계획을 세우거나... 친구들이 방심하는 사이 혼돈을 불러일으키세요. 인간관계란 원래 복잡한 겁니다. 특히나 머릿속에 기생체가 자리 잡고 있을 때는 말이죠. </ul><br><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/extras/02_Bullets_points.png?t=1705604554"><br><ul class="bb_ul">7명의 특별한 오리진 영웅은 저마다 고유한 특질과 목적, 세상에 대한 관점을 지녔으며, 이 영웅들을 통해 제작진이 손수 만든 경험을 즐길 수 있습니다. 이들의 이야기는 게임의 주요한 서사와 엮여 있으며, 여러분이 내리는 선택으로 인해 속죄, 구원, 지배 등 다양한 결말 중 하나로 끝을 맺게 됩니다. 오리진 영웅으로 플레이해 이들의 이야기를 즐기거나, 이러한 영웅들을 영입해 함께 싸워 보세요. </ul><br><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/extras/03_Bullets_points.png?t=1705604554"><br><ul class="bb_ul">발더스 게이트 3의 턴 기반 전투는 D&amp;D 5판의 규칙 세트를 토대로 만들어졌습니다. 팀에 기반한 선제권, 유리 보정 및 불리 보정, 굴림 보정치 시스템이 첨단 AI, 확장된 환경 상호 작용, 전략과 예측으로 우위를 점할 수 있는 새로운 흐름의 전투와 어우러져 있죠. 전투의 난이도는 세 가지 난이도 설정으로 조절할 수 있으며, 이 밖에도 무게 중심을 바꾼 주사위로 전투의 판도를 뒤집거나 전술가 모드로 좀 더 어려운 게임을 즐길 수 있습니다.  </ul><br><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/extras/04_Bullets_points_Unprecedented.png?t=1705604554"><br><ul class="bb_ul">발더스 게이트 3에는 11개의 종족(인간, 기스양키, 하프오크, 드워프, 엘프, 드로우, 티플링, 하플링, 하프엘프, 노움, 드래곤본)뿐만 아니라 31개의 하위 종족을 만나 볼 수 있으며, 12개의 직업에서 파생된 46개의 하위 직업이 준비돼 있는 등, 이전에는 경험하지 못한 폭넓고 깊이 있는 콘텐츠를 즐기실 수 있습니다. 이 손수 제작된 세계에서는 600개가 넘는 주문과 행동으로 무한에 가까운 상호 작용을 자유롭게 이용할 수 있고, 탐사를 통해 보상을 얻을 수 있으며, 플레이어가 직접 모험을 만들어 나가게 됩니다. 또한, 독특한 캐릭터 생성 기능을 통해 이전과는 차원이 다른 깊이의 캐릭터를 만들 수 있습니다. 게임 내에서는 캐릭터의 정체성에 따라 내용이 달라지며, 캐릭터를 12레벨까지 육성하는 과정을 통해 여러분은 자신만의 특별한 유산을 남기게 됩니다. 그뿐만 아니라 174시간이 넘는 분량의 시네마틱 영상이 준비돼 있기 때문에, 여러분이 어떤 선택을 내리든 그에 따른 영상을 감상하실 수 있습니다. 게임을 새로 플레이할 때마다 새로운 시네마틱 여정이 기다리는 셈이죠. </ul><br><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/extras/05_Bullets_points_Romances.png?t=1705604554"><br><ul class="bb_ul">발더스 게이트에 전쟁의 위협이 다가오고 있으며 마인드 플레이어의 침공을 목전에 둔 가운데, 여러분은 여정을 통해 우정을 다지셨을 겁니다. 물론 우정이 필수적인 것은 아니지만 여러분은 여정 중에 만나는 이들과 현실적이고 역동적인 관계를 나누게 되며, 동료들이 종국에는 어떤 존재가 될지는 여러분의 손에 달려 있습니다. 동료들은 저마다 고유한 도덕적 기준을 지니고 있으며, 여러분이 여정에서 내리는 선택에 반응할 겁니다. 과연 여러분은 손해를 감수하고 자신만의 이상을 고집할까요? 아니면 사랑에 따른 행동을 취하게 될까요? 발더스 게이트로 가는 길에 형성된 관계는 야영지에서 막간의 휴식이 돼줄 뿐만 아니라, 여러분이 모험 중에 내리는 수많은 결정에 영향을 줄 겁니다. </ul><br><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/extras/06_Bullets_points_Customise.png?t=1705604554"><br><ul class="bb_ul">방송을 시작하고 싶어도 곰한테 공격당한다든지 욕설이 오간다든지, 아니면 벌거벗은 캐릭터가 등장해 곤란할 때가 있죠. 발더스 게이트 3에는 3단계의 스트리머 친화적인 옵션이 준비돼 있습니다. 노출과 선정적인 콘텐츠를 개별적으로 비활성화할 수 있으며, Twitch 통합을 켜면 저희가 '지옥에서 온 패널' 쇼케이스를 진행할 때처럼 시청자들과 직접 소통할 수 있습니다! 이러한 옵션을 사용하면, 발더스 게이트 3를 어떤 방식으로 플레이하든 문제없이 스트리밍하실 수 있을 겁니다.  </ul><br>`;

  return (
    <div>
      <section>
        <div>
          <Image
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg?t=1705604554"
            alt="발더스"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={100}
            height={100}
          />
        </div>
        <div className={styles.contentBox}>
          <h2 className={styles.gameTitle}>Baldurs Gate 3</h2>
          <div>2023.10.11</div>
          <div className={styles.genreArea}>
            <div className={styles.genreTitle}>장르</div>
            <div className={styles.genreList}>
              <GenreBadge label="액션" />
              <GenreBadge label="어드벤쳐" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <section className={styles.contentBox}>
          <h3>가격</h3>
          <div>
            <StoreLink
              href="https://isthereanydeal.com/game/baldurs-gate-3/info/"
              store="steam"
              regular={69000}
              discount={56000}
              lowest={45000}
            />
          </div>
        </section>
        <section className={styles.contentBox}>
          <h3>히스토리</h3>
          <div>
            <PriceHistoryChart history={history} />
          </div>
        </section>
        <section className={styles.contentBox}>
          <h3>평가</h3>
          <div className={styles.reviewSites}>
            <div>
              <div className={styles.reviewSiteName}>Metacritic</div>
              <div className={styles.reviewSiteScores}>
                <Link
                  href="https://https://www.metacritic.com/"
                  target="_blank"
                  className={styles.reviewSiteLink}
                >
                  <MetaScore score={90} />
                </Link>
                <Link
                  href="https://https://www.metacritic.com/"
                  target="_blank"
                  className={styles.reviewSiteLink}
                >
                  <UserScore score={96} />
                </Link>
              </div>
            </div>
            <div>
              <div className={styles.reviewSiteName}>OpenCritic</div>
              <div className={styles.reviewSiteScores}>
                <Link
                  href="https://https://www.metacritic.com/"
                  target="_blank"
                  className={styles.reviewSiteLink}
                >
                  <Rating tier="Strong" />
                </Link>
                <Link
                  href="https://https://www.metacritic.com/"
                  target="_blank"
                  className={styles.reviewSiteLink}
                >
                  <TopCritic tier="Strong" score={90} />
                </Link>
                <Link
                  href="https://https://www.metacritic.com/"
                  target="_blank"
                  className={styles.reviewSiteLink}
                >
                  <RecommendPercent tier="Strong" percent={90.3} />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>스팀</div>
            <ScoreBar positive={80} totalCount={120} />
          </div>
        </section>
        <section className={styles.contentBox}>
          <h3>상세 정보</h3>
          <Gallery name={params.gameId} contents={getContents(10)} />
          <div className={styles.descriptionContainer}>
            <Description content={descriptionContent} />
          </div>
        </section>
      </section>
    </div>
  );
}
