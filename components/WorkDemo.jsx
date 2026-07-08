import { CheckCircle2, PackageCheck, RefreshCcw, TriangleAlert } from 'lucide-react';

const completedWork = [
  {
    icon: RefreshCcw,
    title: 'Order #4521',
    status: 'Mislabel confirmed',
    detail: 'Refund issued for $42.00. Customer reply drafted in your voice.',
  },
  {
    icon: PackageCheck,
    title: 'Black Hoodie (M)',
    status: 'Restock risk found',
    detail: '12 units left and selling faster than restock pace. Reorder draft created.',
  },
];

export default function WorkDemo() {
  return (
    <section className="work-demo-section" id="watch">
      <div className="section-heading">
        <p className="section-kicker">Watch it work</p>
        <h2>Say it like you would tell a person.</h2>
        <p>No forms, no menus. Tell OpenShop what is wrong and watch it get handled.</p>
      </div>

      <div className="work-demo">
        <article className="demo-panel demo-before">
          <div className="demo-panel-header">
            <span>Merchant message</span>
            <TriangleAlert size={19} strokeWidth={1.8} aria-hidden="true" />
          </div>
          <p>
            hey can u check order 4521, customer says wrong size shipped. if its actually
            our mistake go ahead and refund + send them something nice. also i think
            we're getting low on the black hoodie again
          </p>
        </article>

        <div className="demo-connector" aria-hidden="true">
          <span />
        </div>

        <article className="demo-panel demo-after">
          <div className="demo-panel-header">
            <span>OpenShop output</span>
            <CheckCircle2 size={20} strokeWidth={1.9} aria-hidden="true" />
          </div>

          <div className="completed-stack">
            {completedWork.map((item) => {
              const Icon = item.icon;

              return (
                <div className="completed-card" key={item.title}>
                  <div className="completed-icon">
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.status}</span>
                    <p>{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
