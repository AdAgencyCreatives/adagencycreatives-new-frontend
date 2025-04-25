import Image from 'next/image';
import Link from 'next/link';

const Dashboard = ({ user, sidebarMenu, topMenu }) => {
  return (
    <section className="max-w-[1600px] mx-auto px-10 pt-40">
      <div className="grid grid-cols-4 gap-14">
        <div className="rounded-4xl border-(--ad-gray) border shadow-(--ad-box-shadow) px-4 py-10 text-center">
          <div className="relative w-[80%] mx-auto mb-2">
            <Image src={user.image} alt="" width="314" height="235" className="image-mask" />
            <Image src="/aac-logo.png" width="67" height="67" alt="" className="absolute right-4 bottom-4 hover:rotate-45 transition-transform duration-3000" />
          </div>
          <div className="font-alta font-bold">
            <h1 className="text-3xl hover:text-yellow-400">{user.name}</h1>
            <p className="uppercase text-base hover:text-yellow-400">{user.status}</p>
          </div>
          <div>
            <ul className="py-8">
            {sidebarMenu.map((item) => {
              return (
                <li className="lowercase text-yellow-400 hover:text-white py-3">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )
            })}
            </ul>
          </div>
        </div>
        <div className="rounded-4xl border-(--ad-gray) border shadow-(--ad-box-shadow) px-10 py-10 text-center col-span-2">
          <ul className="flex justify-between">
            {topMenu.map((item) => {
              return (
                <li className="lowercase text-yellow-400 hover:text-white">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="rounded-4xl border-(--ad-gray) border shadow-(--ad-box-shadow) px-10 py-10">
          <div className="flex flex-col gap-14">
            <div>
              <p className="font-alta font-bold uppercase text-base text-yellow-400 mb-2">YOUR PLAN</p>
              <p className="lowercase hover:text-yellow-400 text-white text-xl">{user.plan}</p>
            </div>
            <div>
              <p className="font-alta font-bold uppercase text-base text-yellow-400 mb-2">UPGRADE PLAN TO</p>
              <p className="lowercase hover:text-yellow-400 text-white text-xl">{user.upgradeTo}</p>
            </div>
            <div>
              <p className="font-alta font-bold uppercase text-base text-yellow-400 mb-2">ADVENTAGES</p>
              <p className="lowercase hover:text-yellow-400 text-white text-xl" dangerouslySetInnerHTML={{ __html: user.advantages }}></p>
            </div>
            <div>
              <p className="font-alta font-bold uppercase text-base text-yellow-400 mb-2">BALANCE</p>
              <p className="lowercase hover:text-yellow-400 text-white text-xl">{user.balance}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;