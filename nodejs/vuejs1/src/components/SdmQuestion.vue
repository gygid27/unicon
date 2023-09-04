<template>
    <main id="main">
        <section id="content">
            <div id="qsList">
                <div class="qsTitle">
                    <h2>문의</h2>
                    <a href="javascript:questionWrite();">문의하기</a>
                </div>
                <div class="search_box">
                    <input type="text" name="word" id="word" />
                </div>
                <div class="qsList_box">
                    <table>
                        <thead>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>답변</th>
                        </thead>
                        <tbody id="qs">
                            <tr v-for="q in qdata" :key="q.id">
                                <td class="qsId">{{ q.id }}</td>
                                <td class="qsTitle">{{ q.title }}</td>
                                <td class="qsWriter">{{ q.writer }}</td>
                                <td class="qsDate">{{ q.data }}</td>
                                <td class="qsTo">{{ q.to }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <section id="side"></section>
    </main>
</template>

<script>
import data from '@/assets/question.json';
const qdata = data;
export default {
    data() {
        return { qdata };
    },
    name: 'SdmQuestion',
};
</script>

<style>
@import '@/assets/question.css';
/* import해서 가져오기*/
</style>
