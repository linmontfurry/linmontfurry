// ============================================
// About Me Content (MDX-style)
// Edit this file to customize the expanded view content.
// Each section should have an `id` that matches a nav item.
// ============================================

import type { ReactNode } from "react"

// -- Reusable content components --

function Heading({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mb-3 text-lg font-semibold text-foreground/90 scroll-mt-8">
      {children}
    </h2>
  )
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-sm leading-relaxed text-foreground/75">{children}</p>
  )
}

// -- Main Content --

export function AboutContent() {
  return (
    <article className="prose-sm max-w-none space-y-8">
      <section>
        <Heading id="about">小凛莫的介绍页</Heading>
        <Paragraph>
          我的全名叫做凛莫泽知，你可以叫我小凛莫，也可以叫我泽知。平时我更喜欢把页面写得干净一点，
          说话方式也尽量自然一点，不搞太花哨的那套。
        </Paragraph>
        <Paragraph>
          如果你现在在这个页面看到我，那就当作我们已经认识了。这里不会写特别官方的履历，
          更像是一个“我现在会什么、正在学什么”的真实状态页。
        </Paragraph>
      </section>

      <section>
        <Heading id="skills">技能方向</Heading>
        <Paragraph>
          我擅长绘制 Q 版插画和美术线稿，属于能独立把想法画出来的类型。代码这块主要写 Python 和
          JavaScript，日常做点网站、小工具和一些自动化脚本。
        </Paragraph>
        <Paragraph>
          技术上不敢说自己多强，但执行力还可以。一个点子从草稿到可运行版本，我会尽量自己从头推到尾，
          先跑起来，再慢慢打磨细节。
        </Paragraph>
      </section>

      <section>
        <Heading id="learning">学习进度</Heading>
        <Paragraph>
          现在正在认真学 Golang，我自己还有很长的学习东西要完成。想把自己写过的一些小Python机器人啊改成golang的代码让他效率翻倍
        </Paragraph>
        <Paragraph>
          音乐基础我也在补课阶段，节奏和听感有在练，但还谈不上专业。简单说就是：
          技术继续进步，艺术继续补完，慢慢变成自己想要的样子。
        </Paragraph>
      </section>

      <section>
        <Heading id="daily">日常偏好</Heading>
        <Paragraph>
          日常状态比较普通，写代码、画点图、折腾点小项目，然后继续学新东西。
          我不太追求“包装感”，更在意内容是不是实在、页面是不是好用。
        </Paragraph>
        <Paragraph>
          如果你想交流项目、绘画或者技术问题，直接从页面里的联系方式找我就行。回复不一定秒回，
          但我看到了都会认真回。
        </Paragraph>
      </section>
    </article>
  )
}
