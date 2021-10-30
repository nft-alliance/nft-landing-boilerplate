export function Divider() {
    return (
        <div>
            <div className="divider" />
            <style jsx>{

                `
                .divider {
                    margin: 30px;
                    border-top: 1px solid rgba(255,255,255,0.5);
                  }
                `
            }</style>
        </div>
    )
}