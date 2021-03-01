import React, { FC } from 'react';
import styles from './hero.less';
import { connect, HeroModelState, ConnectProps } from 'umi';
import { Row, Col } from 'antd';

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const Hero: FC<PageProps> = (props) => {
  // console.log(props.hero);
  const { heros = [] } = props.hero;

  return (
    <Row>
      {heros.reverse().map((item) => (
        <Col key={item.ename} span={3} className={styles.heroitem}>
          <img
            src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
          />
          <p>{item.cname}</p>
        </Col>
      ))}
    </Row>
  );
};

export default connect(({ hero }: { hero: HeroModelState }) => ({ hero }))(
  Hero,
);
